class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :games
  has_many :ratings
  has_many :reviews
end