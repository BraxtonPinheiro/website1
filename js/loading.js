const loadText = document.queryselection('.loading-text')
const bg = document.queryselector('.bg')

let load = 0

let int = setInterval(bluring, 300)

function bluring() {
    load++
    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `$(load)%`
    bg.style.filter = `blur($(50 - (load / 2))px)`
    loadText.style.opacity = `$(1 - load/100)`
}
