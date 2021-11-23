class Game < ApplicationRecord
  belongs_to :user
  belongs_to :daily_challenge
  has_many :daily_results
  has_many :students

  validates :current_hour, numericality: { only_integer: true }
  validates :current_hour, inclusion: { in: 9..18 }
end
