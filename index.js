#! /usr/dev/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourful welcome message
console.log(chalk.bold.cyanBright(` /n /t/t code with neha - word counter`));
console.log("=".repeat(60));
//prompt the user to enter a sentance
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//trimmimg the sentance and splitting it into words based on "space"
let words = answers.sentence.trim().split("");
//Analysis of user input sentance
console.log("=".repeat(60));
console.log(chalk.bold("- sentance words:"));
console.log(words);
console.log(chalk.bold(`\n = word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
