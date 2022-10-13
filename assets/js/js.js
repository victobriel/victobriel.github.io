const html = document.querySelector('html')
const themeBtn = document.querySelector('.m-theme-switch input')
const nameInput = document.querySelector('#name')
const submitForm = document.querySelector('#submit-Form')
const formMessageError = document.querySelector('#form-Error')

themeBtn.addEventListener('click', () => {
    html.classList.toggle('light-mode')
})

submitForm.addEventListener('click', () => {
    if (!nameInput.value.length)
        formMessageError.innerHTML = formMessageError.innerHTML + "<p>O nome não pode estar vazio.</p>"
    if (nameInput.value.length > 50)
        formMessageError.innerHTML = formMessageError.innerHTML + "<p>O nome não pode conter mais de 50 caracteres.</p>"
})
