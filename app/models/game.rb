class Game < ApplicationRecord
  belongs_to :user
  belongs_to :daily_challenge
  has_many :daily_results
  has_many :students

  validates :current_hour, numericality: { only_integer: true }
  validates :current_hour, inclusion: { in: 9..18 }

  def hour_update
    game = self
    game.current_hour += 1
  end

  def daily_update
    game = self
    game.current_hour = 9
    new_position = game.daily_challenge.position + 1
    new_daily_challenge = DailyChallenge.where(position: new_position)
    game.daily_challenge = new_daily_challenge
  end
end
