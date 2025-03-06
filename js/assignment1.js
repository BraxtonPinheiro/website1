const button = document.querySelector('.btn')
const box = document.querySelector('.box')
const body = document.querySelector('body')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

button.addEventListener('click', ()=> {
    button.classList.toggle('active')
    box.classList.toggle('active')
    body.classList.toggle('active')
    light.classList.toggle('active')
    dark.classList.toggle('active')
})



