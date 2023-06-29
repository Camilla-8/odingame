document.addEventListener('DOMContentLoaded', () => {
  
  //Elements
  const game = ['Rock', 'Scissors', 'Paper'] 
  const buttons = document.querySelectorAll('.buttons > button')
  const result = document.querySelector('.buttons > p')
  const redResult = document.querySelector('.footer > p')

  //Functions
  function rsp(e) {
    const user = e.target.className
    let pc = game[Math.floor(Math.random() * 3)]
    result.textContent = `User: ${user},  Computer: ${pc}`
    if (user === pc) {
      return redResult.textContent = 'Draw'
    } else {
      if ((user === 'Rock' && pc === 'Scissors') ||
          (user === 'Scissors' && pc === 'Paper') ||
          (user === 'Paper' && pc === 'Rock')) {
        return redResult.textContent = 'You are the winner'
      } else {
        return redResult.textContent = 'Computer Won This Time, Try Again '
      }
    }
  }

  
  //Event Listener
  buttons.forEach(b => {
    b.addEventListener('click', rsp)
  });
  

  

})