class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :img
      t.string :description
      t.text :post

      t.timestamps
    end
  end
end
