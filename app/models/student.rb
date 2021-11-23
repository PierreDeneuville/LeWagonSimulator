class Student < ApplicationRecord
  belongs_to :exercise
  belongs_to :game
  has_many :buddy_pairs
  validates :lives, numericality: { only_integer: true }
  validates :lives, inclusion: { in: 0..3 }
  def current_buddy
  end

  def help_buddy
    self.is_helped = true
    self.can_help = false
  end
end
