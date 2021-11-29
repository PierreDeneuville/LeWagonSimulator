const wagon = document.querySelector('.le-wagon');
const studs = document.querySelectorAll('.studs')
const scoreTable = document.querySelector('.score-table')
const containerIndex = document.querySelector('.container-index')
const studentsArrive = document.querySelectorAll('.students')
let i = 1

const studentAnime = (studentsArrive, i) => {
  if (i <= studentsArrive.length) {
    const student = studentsArrive[i - 1]
    student.style.backgroundImage = `url(/assets/charac${i}Face.png)`
    const final = studs[i - 1]
    const toTop = final.getBoundingClientRect().top
    const toLeft = final.getBoundingClientRect().left
    student.classList.remove('no-display')
    i = i + 1
    $(student).animate({
      top: toTop
    }, 1500)
    $(student).animate({
      left: toLeft
    }, 1500)
    studentAnime(studentsArrive, i)

  }

}

const wagonArrive = () => {
  console.log($(wagon))
  $(wagon).animate({
    left: 766
  }, 3000)

}

const wagonLeave = () => {
  $(wagon).animate({
    left: 1500
  }, 3000)
}
const gameShowAnimate = () => {

  const container = document.querySelectorAll('.container-show-games')
  const time = document.querySelector('.time');
  if(container && time) {
    if (time.innerText.includes('9H')) {
      // window.addEventListener('load', (e) => {
      // })
        console.log('hellooo')
        studs.forEach((student) => {
          student.classList.add('background-remove')
        })
        wagonArrive()
        setTimeout(function () {
          studentAnime(studentsArrive, i);
        }, 3500)

        setTimeout(wagonLeave, 6000)


    }

  } else if(scoreTable) {
    window.addEventListener('load', (e) => {
      wagonArrive()
      setTimeout(wagonLeave, 6000)

    })
  } else if(containerIndex) {
    window.addEventListener('load', (e) => {
      wagonArrive()
      setTimeout(wagonLeave, 8000)
    })
  }

}








export { gameShowAnimate };
