const wagon = document.querySelector('.le-wagon');
const elements = document.querySelectorAll('.student1')
const scoreTable = document.querySelector('.score-table')
const containerIndex = document.querySelector('.container-index')
let i = 1

const studentAnime = (elements, i) => {
  if (i <= elements.length) {
    const element = document.querySelector(`.students${i}`)
    const final = elements[i - 1]
    const toTop = final.getBoundingClientRect().top
    const toLeft = final.getBoundingClientRect().left
    element.classList.remove('no-display')
    i = i + 1
    $(element).animate({
      top: toTop
    }, 1500)
    $(element).animate({
      left: toLeft
    }, 1500)
    studentAnime(elements, i)

  }

}

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
const gameShowAnimate = () => {
  const container = document.querySelectorAll('.container-show-games')
  const time = document.querySelector('.time');
  if(container && time) {
    if (time.innerText.includes('9H')) {
      window.addEventListener('load', (e) => {
        elements.forEach((element) => {
          element.classList.remove('background-appear')
        })
        wagonArrive()
        setTimeout(function () {
          studentAnime(elements, i);
        }, 3500)

        setTimeout(wagonLeave, 6000)

      })

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
