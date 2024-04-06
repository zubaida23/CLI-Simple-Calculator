#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.yellow("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.yellow("Enter second number"), type: "number", name: "secondNumber" },
    {
        message: chalk.blue("Select one of the operators to perform action"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement:
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.green(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.green(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.green(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Plaese select valid operator"));
}
