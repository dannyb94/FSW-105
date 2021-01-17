const readline = require("./node_modules/readline-sync");
var firstNumber = readline.questionInt("Enter first number: ");
var secondNumber = readline.questionInt("Enter second number: ");
var enteredOperator = readline.question("Enter operation to perform: Add, Subtract, Multiply, Divide: ");

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function subtractTwoNumbers(firstNumber, secondNumber){
    return firstNumber +- secondNumber;
}
function multiplyTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divideTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function myCalculator(firstNumber, secondNumber, enteredOperator){
    if(enteredOperator == "add"){
        console.log("The result is " + addTwoNumbers(firstNumber, secondNumber));
    } else if(enteredOperator == "sub"){
        console.log("The result is " + subtractTwoNumbers(firstNumber, secondNumber));
    } else if(enteredOperator == "mul"){
        console.log("The result is " + multiplyTwoNumbers(firstNumber, secondNumber));
    } else if(enteredOperator == "div"){
        console.log("The result is " + divideTwoNumbers(firstNumber, secondNumber));
    } else {
        console.log("Operation not recognized.")
    }
}
myCalculator(firstNumber, secondNumber, enteredOperator);