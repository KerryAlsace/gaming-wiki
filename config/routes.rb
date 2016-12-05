Rails.application.routes.draw do
  root 'application#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :studios do
    resources :games
  end

  resources :games
  resources :platforms
  resources :genres
end
