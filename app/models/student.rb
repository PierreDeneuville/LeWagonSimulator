class Student < ApplicationRecord
  belongs_to :exercise
  belongs_to :game
  has_many :buddy_pairs
  validates :lives, numericality: { only_integer: true }
  validates :lives, inclusion: { in: 0..3 }
  def current_buddy
    student = self
    buddies = BuddyPair.find_by(first_student: student) || BuddyPair.find_by(second_student: student)
    buddies.first_student == student ? current_buddy = buddies.second_student : current_buddy = buddies.first_student
    return current_buddy
  end

  def hour_update
    student = self
    reset_help(student)
    update_exercise(student)
    student.save
  end

  def daily_update
    student = self
    student.lives -= 1 if student.exercise.position <= 3
    student.exercise = student.game.daily_challenge.exercises.first
    student.success_probability = student.exercise.success_probability
    reset_help(student)
    student.save
  end

  private

  def reset_help(student)
    student.is_helped = false
    student.can_help = true
    student.teacher_help = false
  end

  def update_exercise(student)
    god_number = rand(1..100)
    if god_number <= student.success_probability && student.exercise.position <= 6
      new_position_exercise = student.exercise.position + 1
      next_exercise = student.game.daily_challenge.exercises.find_by(position: new_position_exercise)
      student.exercise = next_exercise
      student.success_probability = student.exercise.success_probability
    else
      student.success_probability += 5
      if student.success_probability < student.exercise.success_probability
        student.success_probability = student.exercise.success_probability
        student.save
      end
      # ajouter si position exercice actuel = 6
    end
  end

end
