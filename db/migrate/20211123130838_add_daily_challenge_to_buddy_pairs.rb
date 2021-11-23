class AddDailyChallengeToBuddyPairs < ActiveRecord::Migration[6.0]
  def change
    add_reference :buddy_pairs, :daily_challenge, null: false, foreign_key: true
  end
end
