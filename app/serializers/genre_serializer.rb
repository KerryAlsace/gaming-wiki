class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :games
  has_many :studios, through: :games
end