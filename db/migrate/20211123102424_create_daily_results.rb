class CreateDailyResults < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_results do |t|
      t.integer :score
      t.references :daily_challenge, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
