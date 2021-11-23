class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :lives, default: 3
      t.references :exercise, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true
      t.integer :success_probability
      t.integer :classroom_position
      t.boolean :teacher_help, default: false
      t.boolean :is_helped, default: false
      t.boolean :can_help, default: true

      t.timestamps
    end
  end
end
