#! /usr/bin/env node
import inquirer from "inquirer";
// Display a  Welcome message
console.log("\n \t\t Code With Areeba - Word Counter");
console.log("=".repeat(60));
// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming a sentence and spliting  it into words based on "spaces"
let words = answers.sentence.trim().split("");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log("- Sentences Words:");
console.log(words);
console.log(`\n - Word Count: ${words.length}`);
console.log("=".repeat(60));
