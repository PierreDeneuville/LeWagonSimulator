Rails.application.routes.draw do
  devise_for :users
  root to: "games#index"
  put "games/:id", to: "games#skip_day", as: "skip"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games do
    resources :students
    resources :daily_results
  end
end
