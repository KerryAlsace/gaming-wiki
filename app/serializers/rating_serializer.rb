class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :game_id

  belongs_to :user
  belongs_to :game
end