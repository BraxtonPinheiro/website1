// Select elements from the DOM
const display = document.querySelector('.display'); // Add a display div in HTML
const buttons = document.querySelectorAll('.calculator button');
const btnC = document.querySelector('.btnC');
const btnEqual = document.querySelector('.btnEqual');
const btnPlus = document.querySelector('.btnPlus');
const btnMinus = document.querySelector('.btnMinus');

// Variable to hold the current input and result
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        // Handle digit button clicks
        if (buttonValue >= '0' && buttonValue <= '9') {
            currentInput += buttonValue;
            updateDisplay(currentInput);
        }
        // Handle operator button clicks
        else if (buttonValue === '+' || buttonValue === '-') {
            if (previousInput !== '') {
                calculate();
            }
            operator = buttonValue;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

// Function to calculate the result
function calculate() {
    if (operator === '+') {
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
    } else if (operator === '-') {
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
    }
    updateDisplay(currentInput);
    previousInput = '';
    operator = '';
}

// Function for the equal button
btnEqual.addEventListener('click', calculate);

// Function to clear the display
btnC.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
});
