const html = document.querySelector('html')
const themeBtn = document.querySelector('.m-theme-switch input')

themeBtn.addEventListener('click', () => {
    html.classList.toggle('light-mode')
})
