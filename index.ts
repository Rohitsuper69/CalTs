import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter Operator:\n");
  const secondStr: string = question("Enter second number:\n");

  const validInput: boolean =
    isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
  if (validInput) {
    const num1: number = parseInt(firstStr);
    const num2: number = parseInt(secondStr);
    const result = calculate(num1, operator as Operator, num2);
    console.log(result);
  } else {
    console.log("Fir karo");
    main();
  }
}

function calculate(num1: number, operator: Operator, num2: number) {
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

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

function isOperator(operator: string): boolean {
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
