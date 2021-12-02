


const teacherMoveLeft = (teacher, student, width) => {
  const toTop = student.getBoundingClientRect().top
  const toLeft = student.getBoundingClientRect().left - width
  $(teacher).animate({
    left: 515
  }, 1500)
  $(teacher).animate({
    top: toTop
  }, 1500)
  $(teacher).animate({
    left: toLeft
  }, 1500)
}

const teacherMoveRight = (teacher, student, width) => {
  const toTop = student.getBoundingClientRect().top
  const toLeft = student.getBoundingClientRect().left + width
  $(teacher).animate({
    left: 1100
  }, 1500)
  $(teacher).animate({
    top: toTop
  }, 1500)
  $(teacher).animate({
    left: toLeft
  }, 1500)
}

const teacherMoveMiddleRight = (teacher, student, width) => {
  const toTop = student.getBoundingClientRect().top
  const toLeft = student.getBoundingClientRect().left - width
  $(teacher).animate({
    left: 855
  }, 500)
  $(teacher).animate({
    top: 185
  }, 500)
  $(teacher).animate({
    left: 800
  })
  $(teacher).animate({
    top: toTop
  }, 1000)
  $(teacher).animate({
    left: toLeft
  }, 1000)
}

const teacherMoveMiddleLeft = (teacher, student, width) => {
  const toTop = student.getBoundingClientRect().top
  const toLeft = student.getBoundingClientRect().left + width
  $(teacher).animate({
    left: 740
  }, 500)
  $(teacher).animate({
    top: 185
  }, 500)
  $(teacher).animate({
    left: 800
  })
  $(teacher).animate({
    top: toTop
  }, 1000)
  $(teacher).animate({
    left: toLeft
  }, 1000)
}
const teacherAnimate = () => {
  const students = document.querySelectorAll('.studs');
  if(students) {

    const teacher = document.querySelector('.main-character')
    const miniCharacter = document.querySelector('.mini-character')
    const width = teacher.getBoundingClientRect().width
    const number = parseInt(miniCharacter.dataset.profHelping, 10)
    const student = document.querySelector(`.student-${number}`)
    if(number == 1 || number == 5 || number == 9) {
      teacherMoveLeft(teacher, student, width)
    } else if(number == 4 || number == 8 || number == 12) {
      teacherMoveRight(teacher, student, width)
    } else if(number == 3 || number == 7 || number == 11) {
      teacherMoveMiddleRight(teacher, student, width)
    } else
      teacherMoveMiddleLeft(teacher, student, width)
  }
}

export { teacherAnimate }
