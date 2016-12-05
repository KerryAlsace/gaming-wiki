class Genre < ApplicationRecord
  has_many :games
  has_many :studio, through: :games
end
