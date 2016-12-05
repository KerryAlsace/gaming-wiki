class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :game
  belongs_to :studio, through: :game
end
