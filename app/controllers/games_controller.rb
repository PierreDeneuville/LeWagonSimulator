class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def create
    @game = Game.new(user: current_user, score: 0, is_over: false, daily_challenge: DailyChallenge.first, current_hour: 9)
    @game.save

    redirect_to game_path(@game)
  end

  def show
    @game = Game.find(params[:id])
  end

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
    @game.save
    redirect_to game_path(@game)
  end
end
