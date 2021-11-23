class CreateDailyChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_challenges do |t|
      t.integer :position

      t.timestamps
    end
  end
end
