#! /usr/bin/env node

//import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//display welcome message
console.log(chalk.bold.blue("\n \t Sadiaism-Word Counter"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence",
    }
]);

//trimming and split the sentence into words
let words = answers.sentence.trim().split(" ");

//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`))
console.log("=".repeat(60));


