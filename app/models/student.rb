class Student < ApplicationRecord
  belongs_to :exercise
  belongs_to :game
  has_many :buddy_pairs
  validates :lives, numericality: { only_integer: true }
  validates :lives, inclusion: { in: 0..3 }
  def current_buddy
    student = self
    buddies = BuddyPair.where(first_student: student) || BuddyPair.where(second_student: student)
    buddies.first_student == student ? current_buddy = buddies.second_student : current_buddy = buddies.first_student
    return current_buddy
  end

  def hour_update
    student = self
    reset_help(student)
    update_exercise(student)
  end

  def daily_update
    student = self
    student.lives -= 1 if student.exercise.position <= 3
    student.exercise = student.game.daily_challenge.exercises.first
    student.success_probability = student.exercise.success_probability
    reset_help(student)
  end

  private

  def reset_help(student)
    student.is_helped = false
    student.can_help = true
    student.teacher_help = false
  end

  def update_exercise(student)
    god_number = rand(1..100)
    if god_number <= student.success_probability
      new_position_exercise = student.exercise.position + 1
      next_exercise = Exercise.where(position: new_position_exercise)
      student.exercise = next_exercise
      student.success_probability = next_exercise.success_probability
    else
      student.success_probability += 5
    end
  end
end
