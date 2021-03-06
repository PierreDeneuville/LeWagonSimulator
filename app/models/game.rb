class Game < ApplicationRecord
  belongs_to :user
  belongs_to :daily_challenge
  has_many :daily_results
  has_many :students

  validates :current_hour, numericality: { only_integer: true }
  validates :current_hour, inclusion: { in: 9..18 }
  after_create :create_students, :create_daily_results

  def create_daily_results
    game = self
    position = 1
    20.times do
      daily_challenge = DailyChallenge.find_by(position: position)
      DailyResult.create(daily_challenge: daily_challenge, game: game, score: 0)
      position += 1
    end
  end

 STUDENTS_NAME = ["ced", "fred", "julien", "julia", "shimon", "pierre", "christopher", "nathan", "nadia", "suzette", "romain", "buffy"]

  def create_students
    exercise = DailyChallenge.first.exercises.first
    students = []
    STUDENTS_NAME.each do |name|
      students << Student.create!(name: name.capitalize, lives: 3, exercise: exercise, success_probability: exercise.success_probability, game: self )
    end
    create_buddies(students)
  end

  def skip_day
    game = self
    students = game.students
    hours_left = 18 - game.current_hour
    hours_left.times do
      game.hour_update
      students.each(&:hour_update)
      game.save
    end
    game.daily_update
    students.each(&:daily_update)
    game.save
  end

  def hour_update
    game = self
    game.current_hour += 1
    game.save
  end

  def daily_update
    game = self
    game.current_hour = 9
    new_position = game.daily_challenge.position + 1
    new_daily_challenge = DailyChallenge.find_by(position: new_position)
    game.daily_challenge = new_daily_challenge
    game.save
  end

  def player_rank
    final_score = score
    case final_score
    when 0
      "On ne peux plus rien pour toi 😓"
    when 1..300
      "Tu ne t'es pas foulé ⭐"
    when 301..500
      "Pas mal, mais pas top non plus ⭐⭐"
    when 501..1000
      "Petit bras, petit chocolats ⭐⭐⭐"
    when 1001..1500
      "Gros respect ⭐⭐⭐⭐"
    when 1501..2500
      "Un vrai cheminot! ⭐⭐⭐⭐⭐"
    when 2501..6000
      "Dieu du Wagon 🌟🌟🌟🌟🌟"
    else
      "Ce score est douteux, tu as triché 🤪"
    end
  end

  def lives_comment
    case lives_remain
    when 0
      "Claquée au sol 💩"
    when 1..5
      "Roi du burnout 😈"
    when 6..10
      "Le boucher du wagon 😱"
    when 11..15
      "Chic type 😇"
    when 16..20
      "Roi des bisounours 🤡"
    when 21..30
      "Eleveur de licornes 🦄"
    end
  end

  def lives_remain
    game = self
    count = 0
    game.students.each do |s|
      count += s.lives
    end
    return count
  end

  def lives_lost(game)
    (game.students.count * 3) - lives_remain
  end

  private

  def create_buddies(students)
    count = 1
    6.times do
      student1 = students.sample
      students.delete(student1)

      student2 = students.sample
      students.delete(student2)

      BuddyPair.create!(first_student: student1, second_student: student2, daily_challenge: DailyChallenge.first)

      student1.classroom_position = count
      student1.save
      count += 1

      student2.classroom_position = count
      student2.save
      count += 1
    end
  end
end
