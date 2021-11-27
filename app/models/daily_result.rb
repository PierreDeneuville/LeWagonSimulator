class DailyResult < ApplicationRecord
  belongs_to :daily_challenge
  belongs_to :game
end
