const buttonTeacher = document.querySelector('.btn-teacher')
const students = document.querySelectorAll('.studs');

const teacherAnimate = () => {
  if(students) {
    buttonTeacher.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('hello')

    })
  }
}

export { teacherAnimate }
