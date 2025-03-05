const button = document.querySelector('.btn')
const box = document.querySelector('.box')
const body = document.querySelector('body')
button.textContent = "Change to Dark Mode";

button.addEventListener('click', ()=> {
    button.classList.toggle('active')
    box.classList.toggle('active')
    body.classList.toggle('active')
})

if (body.classList.contains('acitve', ()=> {
    button.textContent = "Change to Light Mode";
}))

