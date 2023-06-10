//------------GLOBAL VARIABLES----------------//
let firstNum=0;
let secondNum=0;
let operator='';
const display = document.querySelector('#display');
let displayNumber = 0;

//------------OPERATION FUNCTIONS--------------//
let add = (num1, num2) => num1 + num2;
let substract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

//-----------OPERATE FUNCTION----------------//
let operate = (firstNum, secondNum, operator) => {
    if(operator == '+') return add(firstNum, secondNum);
    else if(operator == '-') return substract(firstNum, secondNum);
    else if(operator == '*') return multiply(firstNum, secondNum);
    else if(operator == '/') return divide(firstNum, secondNum);
}

//----------BUTTON LISTENER FUNCTION----------//
/*let buttonListener = ("click", () => {
    
    whichButton.forEach((boton) => {
        console.log(boton.textContent);
    });
});*/

const buttonListener = () => {
    const whichButton = document.querySelectorAll('button');
    whichButton.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent+=(button.textContent);
        displayNumber = display.textContent;
    });
});
}

buttonListener();
