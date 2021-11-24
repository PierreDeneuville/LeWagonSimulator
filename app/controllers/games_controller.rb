class GamesController < ApplicationController
  before_action :set_game, only: [:show]

  def index
    @games = Game.all
  end

  def create
    @game = Game.new(user: current_user, score: 0, is_over: false, daily_challenge: DailyChallenge.first, current_hour: 9)
    @game.save

    redirect_to game_path(@game)
  end

  def show
    raise
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end
end
