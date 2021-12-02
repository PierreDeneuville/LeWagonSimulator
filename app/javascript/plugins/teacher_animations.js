
const teacherMove = () => {
  const miniCharacter = document.querySelector('.mini-character')
  const teacher = document.querySelector('.main-character')
  const number = parseInt(miniCharacter.dataset.profHelping, 10)
  const student = document.querySelector(`.student-${number}`)
  const width = teacher.getBoundingClientRect().width
  const toTop = student.getBoundingClientRect().top
  const toLeft = student.getBoundingClientRect().left - width
  $(teacher).animate({
    left: toLeft
  }, 1500)
  $(teacher).animate({
    top: toTop
  }, 1500)
}
const teacherAnimate = () => {
  const students = document.querySelectorAll('.studs');
  if(students) {
    setTimeout(teacherMove, 500)
    // if (miniCharacter.dataset.profHelping !== '') {
    // }
  }
}

export { teacherAnimate }
