class Genre < ApplicationRecord
  has_many :games
  has_many :studios, through: :games
end
