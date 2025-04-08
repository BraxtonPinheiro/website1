const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')  // Corrected from LPadel to LPaddle
document.body.appendChild(LPaddle)
let LPaddleWidth = 20 // Corrected from LPadelWidth to LPaddleWidth
let LPaddleHeight = 100 // Corrected from LPadelHeight to LPaddleHeight
let LPaddleSpeed = 20 // Corrected from LPadelSpeed to LPaddleSpeed
const ballRadius = 20
const windowHeight = window.innerHeight
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2 // Corrected from LPadelYPosition to LPaddleYPosition
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
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition // Corrected from LPadelTop to LPaddleTop
let LPaddleBottom = LPaddleYPosition + LPaddleHeight // Corrected from LPadelBottom to LPaddleBottom
let LPaddleRight = LPaddleXPosition + LPaddleWidth // Corrected from LPadelRight to LPaddleRight

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

createLPaddle() // Corrected from createLPadel to createLPaddle
function createLPaddle(){
    LPaddle.style.height = `${LPaddleHeight}px` // Corrected from LPadelHeight to LPaddleHeight
    LPaddle.style.width = `${LPaddleWidth}px` // Corrected from LPadelWidth to LPaddleWidth
    LPaddle.style.backgroundColor = 'red'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = '50px'
    LPaddle.style.top = `${LPaddleYPosition}px` // Corrected from LPadelYPosition to LPaddleYPosition
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        if (LPaddleYPosition > 0) { // Corrected from LPadelYPosition to LPaddleYPosition
            LPaddleYPosition -= LPaddleSpeed // Corrected from LPadelSpeed to LPaddleSpeed
        }
        else {
            LPaddleYPosition = 0 // Corrected from LPadelYPosition to LPaddleYPosition
        }

    }
    if (event.key == 's'){
        if (LPaddleYPosition < windowHeight - LPaddleHeight) { // Corrected from LPadelYPosition to LPaddleYPosition
            LPaddleYPosition += LPaddleSpeed // Corrected from LPadelSpeed to LPaddleSpeed
        }
        else {
            LPaddleYPosition = windowHeight - LPaddleHeight // Corrected from LPadelYPosition to LPaddleYPosition
        }
    }
    LPaddle.style.top = `${LPaddleYPosition}px` // Corrected from LPadelYPosition to LPaddleYPosition
})
