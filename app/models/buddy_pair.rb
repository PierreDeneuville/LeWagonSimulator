class BuddyPair < ApplicationRecord
  belongs_to :first_student, class_name: 'Student'
  belongs_to :second_student, class_name: 'Student'
  belongs_to :daily_challenges
end
