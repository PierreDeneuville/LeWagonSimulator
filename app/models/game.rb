class Game < ApplicationRecord
  belongs_to :user
  belongs_to :daily_challenge
  has_many :daily_results
  has_many :students

  validates :current_hour, numericality: { only_integer: true }
  validates :current_hour, inclusion: { in: 9..18 }
  after_create :create_students

 STUDENTS_NAME = ["ced", "fred", "julien", "julia", "shimon", "pierre", "christopher", "nathan", "nadia", "suzette", "romain", "buffy", "jeremy", "moussa", "melanie", "claudine"]

  def create_students
    exercise = DailyChallenge.first.exercises.first
    students = []
    STUDENTS_NAME.each do |name|
      students << Student.create!(name: name, lives: 3, exercise: exercise, success_probability: exercise.success_probability, game: self )
    end
    create_buddies(students)
  end

  private

  def create_buddies(students)
    count = 1
    8.times do
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
end
