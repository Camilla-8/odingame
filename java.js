document.addEventListener('DOMContentLoaded', () => {
  //Elements
  const gameButtons = document.querySelectorAll('#game > .buttons')
  const popup = document.querySelector('#popup')
  const closeButtons = popup.querySelector('button')
  const popupWinner = popup.querySelector('h1')
  const popupResult = popup.querySelector('h2')
  const backcolor = document.querySelector('#backcolor')

  //Functions
  function bToggle(e) {
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
    popupWinner.classList.remove('red')
    popupWinner.classList.remove('blue')
  }

  function ifCongrats() {
    if (popupWinner.textContent.includes('Congrats')){
      popupWinner.classList.add('red')
    } else {
      popupWinner.classList.add('blue')
    }
  }

  //Event Listener
  gameButtons.forEach(b => {
    b.addEventListener('click', bToggle)
  });

  closeButtons.addEventListener('click', cToggle)

  gameButtons.forEach(b => {
    b.addEventListener('click', ifCongrats)
  });
})
