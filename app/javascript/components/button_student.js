const helpStudent = () => {
  const buttonHelp = document.querySelector('.button-help')
  const container = document.querySelector('.container-show-games');
  if(container) {
    const students = document.querySelectorAll('.student1');
    students.forEach((student) => {
      student.addEventListener('click', (e) => {
        e.preventDefault();
        buttonHelp.innerHTML = '';
        if(student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'btn btn-primary btn-buddy' rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=student'>help buddy</a>`
          )
        }
        if (student.dataset.teacherHelp == '' && student.dataset.isHelped == 'false' && student.dataset.canHelp == 'true') {
          buttonHelp.insertAdjacentHTML('beforeend',
            `<a class= 'btn btn-primary btn-teacher' rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=teacher'>teacher help</a>`
          )
        }
      })
    })

  }
}


export { helpStudent };
