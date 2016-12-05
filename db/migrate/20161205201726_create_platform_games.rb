class CreatePlatformGames < ActiveRecord::Migration[5.0]
  def change
    create_table :platform_games do |t|
      t.integer :platform_id
      t.integer :game_id

      t.timestamps
    end
  end
end
