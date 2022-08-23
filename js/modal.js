export const Modal = {
  wrapper: document.querySelector('.modalWrapper'),
  message: document.querySelector('.title span'),
  closeButton: document.querySelector('.title button.close'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.closeButton.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
