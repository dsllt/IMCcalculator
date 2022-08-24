import { Modal } from './modal.js'
import { errorAlert } from './errorAlert.js'
import { notNumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightNotANumber) {
    errorAlert.open()
    return
  }

  errorAlert.close()

  const resultIMC = calculateIMC(weight, height)
  displayResultMessage(resultIMC)
}

function displayResultMessage(resultIMC) {
  const message = `Seu IMC é de ${resultIMC}.`

  Modal.message.innerHTML = message
  Modal.open()
}

inputWeight.oninput = () => errorAlert.close()
inputHeight.oninput = () => errorAlert.close()
