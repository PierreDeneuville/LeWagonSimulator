const helpStudent = () => {
  const buttonHelp = document.querySelector('.button-help')
  const container = document.querySelector('.container-show-games');
  const miniCharacter = document.querySelector('.mini-character')
  if(container) {
    if (miniCharacter.dataset.profHelping !== '') {
      miniCharacter.innerHTML = ''
      const image = parseInt(miniCharacter.dataset.profHelping, 10)
      miniCharacter.insertAdjacentHTML('beforeend',
        `<img src="/assets/charac${image}Face.png" alt="mini character">`)
    }
    const students = document.querySelectorAll('.studs');
    students.forEach((student) => {
      student.addEventListener('click', (e) => {
        e.preventDefault();
        buttonHelp.innerHTML = '';
        if(student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'button-rpg btn-buddy'  data-remote="true" rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=student'>Binome</a>`
          )
        }
        if (student.dataset.teacherHelp == '' && student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'button-rpg btn-teacher'  data-remote="true" rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=teacher'>Prof</a>`
          )
        } else {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'button-rpg btn-teacher disabled' href=''>Prof</a>
             <a class= 'button-rpg btn-buddy disabled' href=''>Binome</a>`
          )

        }
      })
    })

  }
}


export { helpStudent };
