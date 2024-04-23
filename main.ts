#! /usr/bin/env node

import inquirer from "inquirer"

console.log("=".repeat(70));
console.log("\n \t \t Welcome to the word counter by SAMIYA \t \t \n");
console.log("=".repeat(70));

let userAnswer: {
    Sentence: string
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Please enter a sentence whose words you want to count"
    }
])

const word = userAnswer.Sentence.trim().split(" ");

console.log("~Sentence words:");
console.log(word);

console.log("~Total words in a given sentence:");
console.log(word.length);