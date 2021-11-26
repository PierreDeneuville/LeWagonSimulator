class DailyResultsController < ApplicationController
  def index
    @daily_results = DailyResult.all
    @game = Game.find(params[:game_id])
  end

  def show
    @daily_result = DailyResult.find(params[:id])
    @game = Game.find(params[:game_id])
    @daily_challenge = DailyChallenge.find_by(daily_result: @daily_result)
  end
end
