class DailyChallenge < ApplicationRecord
  has_many :exercises
  has_many :games
  has_many :buddy_pairs
  has_one :daily_result
  validates :position, presence: true
  validates :position, numericality: { only_integer: true }
  validates :position, inclusion: { in: 1..20 }
end
