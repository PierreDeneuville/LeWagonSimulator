const endDay = document.querySelector('.end-day')
const endGame = document.querySelector('.end-game')
const wagon = document.querySelector('.le-wagon')
const students = document.querySelectorAll('.student1')



const wagonArrive = () => {
  $(wagon).animate({
    left: 864
  }, 3000)

}

const wagonLeave = () => {
  $(wagon).animate({
    left: 1500
  }, 3000)
}

const removeBackground = () => {
  students.forEach((student) => {
    student.classList.remove('background-appear')
  })
}
const studentsLeave = () => {
  students.forEach((student) => {
    const actualTop = student.getBoundingClientRect().top
    const actualLeft = student.getBoundingClientRect().left
    const topGo = 810 - actualTop
    const leftGo = 907 - actualLeft
    student.style.position = 'absolute'
    student.style.top = '-28px'
    $(student).animate({
      left: leftGo
    }, 2000)
    $(student).animate({
      top: topGo
    }, 2000, removeBackground)


  })
}


const animationLeaving = () => {
  if(endDay || endGame) {

    wagonArrive();
    setTimeout(studentsLeave, 3100)
    setTimeout(wagonLeave, 7100)

  }


}

export { animationLeaving }
