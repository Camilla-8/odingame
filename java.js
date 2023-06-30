document.addEventListener('DOMContentLoaded', () => {
  //Elements
  const gameButtons = document.querySelectorAll('#game > .buttons')
  const popup = document.querySelector('#popup')
  const closeButtons = popup.querySelector('button')
  //Functions
  function bToggle(e) {
    const backcolor = document.querySelector('#backcolor')
    const popupResult = popup.querySelector('h2')
    const popupWinner = popup.querySelector('h1')
    const options = ['Rock','Scissors','Paper']
    const user = e.target.classList.value
    const computer = options[Math.floor(Math.random()*3)]
    backcolor.classList.add('show')
    popup.classList.add('show')
    popupResult.textContent = `User : ${user} | Computer : ${computer}`
    if (user === computer) {
      return popupWinner.textContent = 'Draw'
      } else { 
        if ((user === 'Rock' && computer ==='Scissors') ||
            (user === 'Scissors' && computer ==='Paper') ||
            (user === 'Paper' && computer ==='Rock')) {
            return popupWinner.textContent = 'Congrats! You Are The Winner'
          } else {
            return popupWinner.textContent = 'Try Again, We Can Be Better than Them'
          }
      }
    }

  function cToggle(e) {
    backcolor.classList.remove('show')
    popup.classList.remove('show')
  }



  //Event Listener
  gameButtons.forEach(b => {
    b.addEventListener('click', bToggle)
  });

  closeButtons.addEventListener('click', cToggle)
})
