const
    // themeBtn = document.querySelector('.m-theme-switch input'),
    submitForm = document.getElementById('form__submit'),
    btnMobile = document.getElementById('btn-mobile'),
    header = document.getElementById('header'),
    body = document.querySelector('body'),
    nav = document.getElementById('nav'),
    menu = document.getElementById('menu'),
    menuTheme = document.getElementById('menu-theme')

function changeTheme() {
    const html = document.querySelector('html')
    html.classList.toggle('light-mode')
    if (html.classList.contains('light-mode'))
        menuTheme.innerHTML = '<a href="#">Tema: Light</a></li>'
    else
        menuTheme.innerHTML = '<a href="#">Tema: Dark</a></li>'
}

// themeBtn.addEventListener('click', changeTheme)
menuTheme.addEventListener('click', changeTheme)

function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault()
    header.classList.toggle('mobile-navbar')
    body.classList.toggle('dark')
    nav.classList.toggle('is-active')
    const active = nav.classList.contains('is-active')
    e.currentTarget.setAttribute('aria-expanded', active)
    if (active)
        e.currentTarget.setAttribute('aria-label', 'Fechar menu')
    else
        e.currentTarget.setAttribute('aria-label', 'Abrir menu')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

submitForm.addEventListener('click', () => {
    alert("Sucesso")
})

menu.addEventListener('click', () => {
    body.classList.remove('dark')
    header.classList.remove('mobile-navbar')
    nav.classList.remove('is-active')
})

function validateName(field) {
    const formNameError = document.getElementById('form__name-error')
    if (field.value.length == 0) {
        formNameError.classList.remove('is-hidden')
        formNameError.innerHTML = "* Nome não pode estar vazio"
        return
    }
    else
    if (field.value.length > 50) {
        formNameError.classList.remove('is-hidden')
        formNameError.innerHTML = "* Utilize no máximo 50 caracteres para nome"
    }
    else
        formNameError.classList.add('is-hidden')
}

function validateEmail(field) {
    const formEmailError = document.getElementById('form__email-error')
    if (field.value.length == 0){
        formEmailError.classList.remove('is-hidden')
        formEmailError.innerHTML = "* Email não pode estar vazio"
        return
    }
    let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if (regex.test(field.value)) {
        formEmailError.classList.add('is-hidden')
        formEmailError.innerHTML = ""
    } else {
        formEmailError.classList.remove('is-hidden')
        formEmailError.innerHTML = "* Email inválido"
    }
}

function validateMessage(field) {
    const formMessageError = document.getElementById('form__message-error')
    if (field.value.length == 0) {
        formMessageError.classList.remove('is-hidden')
        formMessageError.innerHTML = "* Mensagem não pode estar vazio"
        return
    }
    else
    if (field.value.length > 300) {
        formMessageError.classList.remove('is-hidden')
        formMessageError.innerHTML = "* Utilize no máximo 300 caracteres para mensagem"
    } else
        formMessageError.classList.add('is-hidden')
}

setInterval(() => {
    if (window.screen.width > 768) {
        body.classList.remove('dark')
        // header.classList.remove('mobile-navbar')
        nav.classList.remove('is-active')
    }
}, 600)
