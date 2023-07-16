const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempt = 1
console.log(randomNumber)

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handlePressEnter)


// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value < 0 || inputNumber.value > 10) {
    alert('O número deve estar entre 0 e 10.')
  }

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `voce acertou em ${xAttempt} tentativas`
  }
  
  inputNumber.value = ''
  if(xAttempt != (xAttempt = '')) {
    xAttempt++
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempt = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}


function handlePressEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}