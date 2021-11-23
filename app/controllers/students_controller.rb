class StudentsController < ApplicationController
  def update
    @student = Student.find(params[:id])
    helping_student = @student.current_buddy
    helping_student.can_help = false
    @student.save
    helping_student.save

    redirect_to show_path(@show)   
  end

  def update
    @student = Student.find(params[:id])
    helping_student = @student.current_buddy
    helping_student.can_help = false
    @student.save
    helping_student.save

    redirect_to show_path(@show)
  end   
end
