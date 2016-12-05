class Game < ApplicationRecord
  belongs_to :studio
  belongs_to :user
  has_many :reviews
  has_many :ratings
  has_many :platforms, through: :platform_games
end
