#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

function countWords(text: string): number {
  const words = text.split(/\s+/).filter(word => word !== '');
  return words.length;
}
console.log(chalk.cyan(`*********** Count Words App ****************`))
async function main() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text you want to count words in:',
    },
  ];

  const answers = await inquirer.prompt(questions);
  const { text } = answers;

  const wordCount = countWords(text);

  console.log(chalk.green(`Word count: ${wordCount}`));
}

main();
