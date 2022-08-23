export const errorAlert = {
  message: document.querySelector('.errorWrapper'),
  open() {
    errorAlert.message.classList.add('open')
  },
  close() {
    errorAlert.message.classList.remove('open')
  }
}
