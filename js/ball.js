const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let LPadelHeight = 100
let LPadelSpeed = 20
const ballRadius = 20
const windowHeight = window.innerHeight
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1
let ballSpeed = 5
let ballXDirection = 1
setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }

}


let ballTop = ballYPosition
let ballBootom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPadelTop = LPadelYPosition
let LpadelBottom = LPadelYPosition + LPadelHeight
let LPadelRight = LPadelXPosition + LPadelWidth



createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = '50%'
    ball.style.backgroundColor = 'blue'
    ball.style.position = 'absolute'
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

createLPadel()
function createLPadel(){
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'red'
    LPadel.style.position = 'absolute'
    LPadel.style.left = '50px'
    LPadel.style.top = `${LPadelYPosition}px`
}


document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        if (LPadelYPosition > 0) {
            LPadelYPosition -= LPadelSpeed
        }
        else {
            LPadelYPosition = 0
        }

    }
    if (event.key == 's'){

        if (LPadelYPosition < windowHeight - LPadelHeight) {
            LPadelYPosition += LPadelSpeed
        }
        else {
            LPadelYPosition = windowHeight - LPadelHeight
        }

    }
    LPadel.style.top = `${LPadelYPosition}px`
})
