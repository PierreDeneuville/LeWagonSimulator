const wagon = document.querySelector('.le-wagon');
const studs = document.querySelectorAll('.studs')
const scoreTable = document.querySelector('.score-table')
const containerIndex = document.querySelector('.container-index')
const studentsArrive = document.querySelectorAll('.students')
const lives = document.querySelectorAll('.life-remaining')
const exercises = document.querySelectorAll('.table-infos')
let i = 1

const playBusAudio = () => {
  const busAudio = new Audio('/assets/son-van.mp3')
  busAudio.play();
}
const studentAnime = (studentsArrive, i) => {
  if (i <= studentsArrive.length) {
    const student = studentsArrive[i - 1]
    // student.style.backgroundImage = `asset-url(charac${i}Face)`
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
  lives.forEach((life) => {
    life.style.display = ''
  })
  exercises.forEach((exercise) => {
    exercise.classList.remove('no-display')
  })
  $(wagon).animate({
    left: 1500
  }, 3000)
}
const gameShowAnimate = () => {

  const container = document.querySelectorAll('.container-show-games')
  const time = document.querySelector('.time');
  if(container && time) {
    if (parseInt(time.dataset.hour, 10) == 9) {
      // window.addEventListener('load', (e) => {
      // })
        // console.log('hellooo')
        studs.forEach((student) => {
          student.classList.add('background-remove')
        })
        lives.forEach((life) => {
          life.style.display = 'none'
        })
        exercises.forEach((exercise) => {
          exercise.classList.add('no-display')
        })
        wagonArrive()
        setTimeout(playBusAudio, 3000)
        setTimeout(function () {
          studentAnime(studentsArrive, i);
        }, 3500)

        setTimeout(wagonLeave, 6500)


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
