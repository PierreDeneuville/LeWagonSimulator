class Exercise < ApplicationRecord
  belongs_to :daily_challenge
  has_many :students
end
