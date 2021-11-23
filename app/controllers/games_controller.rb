class GamesController < ApplicationController
  def update
    @game = Game.find(params[:id])
    students = @game.students
    if @game.current_hour < 18
      @game.hour_update
      students.each(&:hour_update)
    elsif @game.current_hour == 18 && @game.daily_challenge.position != 20
      @game.daily_update
      students.each(&:daily_update)
    else
      # TODO : score total
      @game.is_over = true
      redirect_to games_path
    end
  end
end
