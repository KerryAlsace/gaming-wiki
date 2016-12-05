class Game < ApplicationRecord
  belongs_to :studio
  belongs_to :user
  belongs_to :genre
  has_many :reviews
  has_many :ratings
  has_many :platform_games
  has_many :platforms, through: :platform_games
end
