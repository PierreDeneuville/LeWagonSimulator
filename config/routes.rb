Rails.application.routes.draw do
  devise_for :users
  root to: "games#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games do
    resources :students
  end
end
