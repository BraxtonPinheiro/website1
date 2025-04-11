const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)

let LPaddleWidth = 10
let LPaddleHeight = 125
let LPaddleSpeed = 15
const ballRadius = 20
const windowHeight = window.innerHeight
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let ballSpeed = 5
let ballXDirection = 1

let score = 0 // display the score, increase the score by 1
// every time the ball hits the paddle

const scoreboard = document.createElement('div')
document.body.appendChild(scoreboard)

function createSLboard() {
    scoreboard.style.height = '80px'
    scoreboard.style.width = '100%'
    scoreboard.style.opacity = '.5'
    scoreboard.style.backgroundColor = 'beige'
    scoreboard.style.position = 'absolute'
    scoreboard.style.right = '0px'
    scoreboard.style.top = '0px'
}

function addScore() {
    score++
    displayScore()
}

displayScore()
function displayScore() {
    scoreboard.innerText = `Score: ${score}`
    scoreboard.style.fontSize = '30px'
    scoreboard.style.right = '0px'
    scoreboard.style.lineHeight = '80px'
}

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = '50%'
    ball.style.backgroundColor = 'blue'
    ball.style.position = 'absolute'
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'red'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = '50px'
    LPaddle.style.top = `${LPaddleYPosition}px`
    LPaddle.style.borderRadius = '15px'
}

let wKey = false
let sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = 50 + LPaddleWidth

    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition -= LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition += LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}

createSLboard()
createBall()
createLPaddle()
animate()

