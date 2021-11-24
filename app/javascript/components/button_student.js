const help_student = () => {
  const buttonHelp = document.querySelector('.button-help')
  const container = document.querySelector('.container-show-games');
  if(container) {
    const students = document.querySelectorAll('.card');
    students.forEach((student) => {
      student.addEventListener('click', (e) => {
        e.preventDefault();
        buttonHelp.innerHTML = '';
        buttonHelp.insertAdjacentHTML('beforeend',
          `<a class= 'btn btn-primary btn-teacher' rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=teacher'>teacher help</a>
          <a class= 'btn btn-primary btn-buddy' rel='nofollow' data-method='patch' href='/games/${student.dataset.gameId}/students/${student.dataset.studentId}?help=student'>help buddy</a>`
        )
      })
    })

  }
}


export { help_student };
