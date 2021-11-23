class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.references :user, null: false, foreign_key: true
      t.references :daily_challenge, null: false, foreign_key: true
      t.integer :score
      t.integer :current_hour
      t.boolean :is_over, default: true

      t.timestamps
    end
  end
end
