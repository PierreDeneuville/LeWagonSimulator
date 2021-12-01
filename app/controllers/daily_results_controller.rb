class DailyResultsController < ApplicationController
  def index
    @daily_results = DailyResult.all
    @game = Game.find(params[:game_id])
  end

  def show
    @game = Game.find(params[:game_id])
    last_challenge = DailyChallenge.find_by(position: @game.daily_challenge.position - 1)
    @daily_result = DailyResult.where(game: @game).find_by(daily_challenge: last_challenge)
    @daily_challenge = DailyChallenge.find_by(daily_result: @daily_result)
  end
end
