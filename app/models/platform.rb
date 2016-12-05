class Platform < ApplicationRecord
  has_many :games, through: :platform_games
end
