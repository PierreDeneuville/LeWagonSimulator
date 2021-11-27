class AddBatchNumberToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :batch_number, :integer
  end
end
