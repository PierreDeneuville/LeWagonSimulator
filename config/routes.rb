Rails.application.routes.draw do
  devise_for :users
 root to: "pages#home" # ou bien "games#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games do
    resources :students
    resources :daily_results
  end
end
