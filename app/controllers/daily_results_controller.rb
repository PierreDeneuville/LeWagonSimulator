class DailyResultsController < ApplicationController

  def show

    @daily_result = DailyResult.find(params[:id])
    @game = Game.find(params[:id])
  end

end
