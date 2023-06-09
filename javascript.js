//------------GLOBAL VARIABLES----------------//
let firstNum=0;
let secondNum=0;
let operator='';

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