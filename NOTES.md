# GENERAL PLAN

- Wiki for video games
- Users can log in and create a page for a video game
- On that game page, other users can add comments/reviews, add their rating (which will update overall rating)
- Users can also propose modifications to game page
- Admins will approve all page creations and page modifications
- Non-logged in users can view all pages, cannot leave comments/reviews or ratings
- Comments will be 
- Can filter by gaming device, rating, genre
- Maybe pull in IGN and other ratings/reviews for reference?
- Nested view with developername/gamename
- Validate username is not duplicate, email is valid and not duplicate, passwords match

<!-- USERS -->
User has email, username, password
User has many reviews
User has many ratings

<!-- GAMES -->
Game belongs to studio
Game belongs to genre
Game has many reviews
Game has many ratings (has 1 avg rating)
Game has many platforms through platform_games

<!-- PLATFORMS -->
Platform has many games through platform_games

<!-- PLATFORMGAMES -->
Platform_games belongs to game
Platform_games belongs to platform

<!-- STUDIOS -->
Studio has many games
Studio has many reviews through games
Studio has many ratings through games (maybe has 1 avg game rating through games?)

<!-- GENRES -->
Genre has many games
Genre has many studios through games

<!-- REVIEWS -->
Review belongs to user
Review belongs to game
Review belongs to studio through game

<!-- RATINGS -->
Rating belongs to user
Rating belongs to game
Rating belongs to studio through game

# FEATURES TO INCLUDE

- Angular Front-end with at least 5 pages
- Include some nested views
- Include searching and filtering
  (such as searching by game name or all games rated 5 stars)
- Include 1+ pg that allows for dynamic updating of a single field of a resource
  (allow changing of game rating on review page)
- Functioning links
- Validate data in Angular before submission
- Rails backend with JSON that accepts and stores data for Angular
- Communicate with Rails backend with $http and Services
- README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

# PROCESS

Refer to https://www.youtube.com/watch?v=YNwehQGslcQ&feature=youtu.be

Initial setup:

- `rails new 'gaming-wiki'`
- `cd gaming-wiki/`
- `touch NOTES.md`
- `touch SPEC.md`
- `git init`
- `git add .`
- `git commit -m "initial commit"`
- `git remote add origin git@github.com:KerryAlsace/gaming-wiki.git`
- `git push -u origin master`
- `touch LICENSE.md`
- add text from 'http://choosealicense.com/licenses/mit/' to LICENCE.md file
- add to Gemfile:
  # Use Responders for flash messages
  gem 'responders'
  # Use Active Model Serializers to convert to JSON
  gem 'active_model_serializers'
  # Use Devise for user authorization
  gem 'devise'
- `bundle install`
- `rails generate devise:install`
- `rails g devise User`
- `rails db:migrate`
- `rails generate migration add_username_to_users username:string:uniq`
- `rails db:migrate`
- `rails console`
- Check that you can successfully create a user
- `rails g model Game name:string genre_id:integer content:text studio_id:integer`
- `rails g model Studio name:string description:text`
- `rails g model Platform name:string`
- `rails g model Genre name:string`
- `rails g model Review title:string content:text user_id:integer game_id:integer`
- `rails g model Rating rating:integer user_id:integer game_id:integer`
- `rails g model PlatformGames platform_id:integer game_id:integer`
- `rails db:migrate`
- test models and migrations in `rails console` and adjust as needed
- create seed file
- `rails db:seed`
- create serializers
- `rails g controller Games`
- add bower and angular gems
- `rails g bower_rails:initialize json`
- Edit bower.json as needed
- `npm install bower -g`
- `rails bower:install`