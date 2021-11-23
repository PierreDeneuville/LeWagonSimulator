class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.integer :success_probability
      t.integer :position
      t.references :daily_challenge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
