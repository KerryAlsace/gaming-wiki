class Studio < ApplicationRecord
  has_many :games
  has_many :reviews, through: :games
  has_many :ratings, through: :games
end
