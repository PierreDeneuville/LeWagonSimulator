class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def show
    @game = Game.find(params[:id])
  end

  def create
    @game = Game.new(user: current_user, score: 0, is_over: false, daily_challenge: DailyChallenge.first, current_hour: 9)
    @game.save

    redirect_to game_path(@game)
  end

  def update
    # raise
    @game = Game.find(params[:id])
    students = @game.students
    @daily_results = @game.daily_challenge.daily_result
    if params['help'] == 'skip'
      if @game.daily_challenge.position < 20
        @game.skip_day
        redirect_to game_daily_result_path(@game, @daily_results)
      else
        finish_game(@game)
        redirect_to game_daily_results_path(@game)
      end
    else
      if @game.current_hour < 18
        next_hour(@game, students)
        redirect_to game_path(@game)
      elsif @game.current_hour == 18 && @game.daily_challenge.position != 20
        next_day(@game, students)
        redirect_to game_daily_result_path(@game, @daily_results)
      else
        finish_game(@game)
        redirect_to game_daily_results_path(@game)
      end
    end
  end


  private

  def next_hour(game, students)
    game.hour_update
    students.each(&:hour_update)
    game.save
  end

  def next_day(game, students)
    game.daily_update
    students.each(&:daily_update)
    game.save
  end

  def finish_game(game)
    game.is_over = true
    game.save
  end
end
