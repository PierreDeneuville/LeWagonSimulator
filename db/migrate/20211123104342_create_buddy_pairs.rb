class CreateBuddyPairs < ActiveRecord::Migration[6.0]
  def change
    create_table :buddy_pairs do |t|
      t.references :first_student
      t.references :second_student
      t.timestamps
    end

    add_foreign_key :buddy_pairs, :students, column: :first_student_id, primary_key: :id
    add_foreign_key :buddy_pairs, :students, column: :second_student_id, primary_key: :id
  end
end
