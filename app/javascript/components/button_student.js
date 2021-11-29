const helpStudent = () => {
  const buttonHelp = document.querySelector('.button-help')
  const container = document.querySelector('.container-show-games');
  if(container) {
    const students = document.querySelectorAll('.studs');
    students.forEach((student) => {
      student.addEventListener('click', (e) => {
        console.log('test')
        e.preventDefault();
        buttonHelp.innerHTML = '';
        if(student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'button-rpg btn-buddy' rel='nofollow' data-method='patch' data-remote="true" href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=student'>help buddy</a>`
          )
        }
        if (student.dataset.teacherHelp == '' && student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'button-rpg btn-teacher' rel='nofollow' data-method='patch' data-remote="true" href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=teacher'>teacher help</a>`
          )
        }
      })
    })

  }
}


export { helpStudent };
