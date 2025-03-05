const button = document.querySelector('.btn')
const box = document.querySelector('.box')
const body = document.querySelector('body')


button.addEventListener('click', ()=> {
    button.classList.toggle('active')
    box.classList.toggle('active')
    body.classList.toggle('active')
})


