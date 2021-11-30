const buttonHour = document.querySelector('.add-hour')
const score = document.querySelector('.score')
const lives = document.querySelectorAll('.life-remaining')
const time = document.querySelector('.time')
const stars = document.querySelectorAll('.star')
const starFinal = document.querySelector('.star-final')
let i = 1

const starAnimate = (stars, i) => {
  if(i < 13) {
    // const toTop = starFinal.getBoundingClientRect().top
    // const toLeft = starFinal.getBoundingClientRect().left
    const life = lives[i - 1]
    const star = stars[i - 1]
    if(parseInt(life.dataset.lives, 10) > 0) {
      star.classList.remove('no-display')
      $(star).animate({
        left: 155,
        top: 240
      }, 1500)
    }

    i = i + 1
    starAnimate(stars, i)

  }
}
const noDisplay = (stars) => {
  stars.forEach((star) => {
    star.classList.add('no-display')
  })
}

const scoreImplement = (object, start, end, duration) => {
  if (start === end) return;
  let range = end - start
  let current = start
  let stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += 1;
    score.innerText = `Score: ${current}`;
    if (current == end) {
      clearInterval(timer);
    }
  }, 100);
}
const scoreAnimation = () => {
  if(buttonHour) {
    if(time.dataset.hour > 9 && time.dataset.hour < 18 && score.dataset.lastScore > 0) {
      setTimeout(function () {
        starAnimate(stars, i);
      }, 500)
      setTimeout(function () {
        noDisplay(stars);
      }, 2000)
      let lastScore = score.dataset.lastScore
      const gameScore = score.dataset.gameScore
      setTimeout(function () {
        scoreImplement("score", parseInt(lastScore, 10), parseInt(gameScore, 10), 4000);
      }, 2000)
    }

  }

}

export { scoreAnimation }
