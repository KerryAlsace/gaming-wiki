class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :user_id, :studio_id

  has_one :user
  has_one :studio
  has_many :platform_games
  has_many :platforms, through: :platform_games
  has_many :ratings
  has_many :reviews
end