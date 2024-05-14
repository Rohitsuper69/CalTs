"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter Operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    var validInput = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validInput) {
        var num1 = parseInt(firstStr);
        var num2 = parseInt(secondStr);
        var result = calculate(num1, operator, num2);
        console.log(result);
    }
    else {
        console.log("Fir karo");
        main();
    }
}
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;
        default:
            return false;
    }
}
main();
