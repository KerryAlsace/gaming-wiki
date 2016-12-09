# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#<User id: nil, email: "", created_at: nil, updated_at: nil, username: nil>
#<Game id: nil, name: nil, content: nil, user_id: nil, studio_id: nil, genre_id: nil, created_at: nil, updated_at: nil>
#<Studio id: nil, name: nil, description: nil, created_at: nil, updated_at: nil>
#<Genre id: nil, name: nil, created_at: nil, updated_at: nil>
#<PlatformGame id: nil, platform_id: nil, game_id: nil, created_at: nil, updated_at: nil>
#<Platform id: nil, name: nil, created_at: nil, updated_at: nil>
#<Rating id: nil, rating: nil, user_id: nil, game_id: nil, created_at: nil, updated_at: nil>
#<PlatformGame id: nil, platform_id: nil, game_id: nil, created_at: nil, updated_at: nil>
#<Review id: nil, title: nil, content: nil, user_id: nil, game_id: nil, created_at: nil, updated_at: nil>

u = User.create(username: 'User10', email: 'user10@user.com', password: 'test1234')
s = Studio.create(name: 'Projekt Red', description: 'Cool studio')
g = Genre.create(name: 'RPG')
game = Game.create(user: u, studio: s, genre: g, name: 'The Witcher 3', content: 'Awesome game')

ps4 = Platform.create(name: 'PS4')
xbox = Platform.create(name: 'XBOX')

pg1 = PlatformGame.create(platform: ps4, game: game)
pg2 = PlatformGame.create(platform: xbox, game: game)

rating = Rating.create(game: game, user: u, rating: 10)
review = Review.create(game: game, user: u, title: 'Witcher 3: Best Game Ever', content: 'Super dope game')

game2 = Game.create(user: u, studio: s, genre: g, name: "The Witcher 2", content: 'Real cool game')