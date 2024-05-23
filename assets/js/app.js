let navigation = document.querySelector('.nav')
let hamburger = document.querySelector('.hamburger')
let body = document.body

hamburger.addEventListener('click', (e) => {
    body.classList.toggle('menu-open')
    hamburger.classList.toggle('is-active')
    navigation.classList.toggle('nav--open')
    e.preventDefault
})