const endDay = document.querySelector('.end-day')
const endGame = document.querySelector('.end-game')
const wagon = document.querySelector('.le-wagon')
const students = document.querySelectorAll('.studs')
// const students = document.querySelectorAll('.student1')



const wagonArrive = () => {
  $(wagon).animate({
    left: 766
  }, 3000)

}

const wagonLeave = () => {
  $(wagon).animate({
    left: 1500
  }, 3000)
}

const removeBackground = (student) => {
  students.forEach((student) => {
    student.classList.add('background-remove')
  })
}
let number = 1
const studentsLeave = () => {
  students.forEach((student) => {
    number += 1
    const toTop = 785 - student.getBoundingClientRect().top
    const toLeft = 815 - student.getBoundingClientRect().left
    $(student).animate({
      left: toLeft
    }, 1500)
    $(student).animate({
      top: toTop
    }, 1500)
  })
  setTimeout(removeBackground, 3000)



}


const animationLeaving = () => {
  if(endDay || endGame) {

    wagonArrive();
    setTimeout(studentsLeave, 3100)
    setTimeout(wagonLeave, 7100)

  }


}

export { animationLeaving }
