
// Import inquirer and fs
import inquirer from 'inquirer';

import fs from 'fs/promises'

// Create a await inquirer function with a list of prompts
// with questions to determine README.MD make up
let {title, description, installation, usage, contributing, repoLink, questions, license, tests} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the project Title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Give brief description of the project. Describe the overall premise and elements required to achieve project goals.",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please describe installation and how users can use/test the code",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is the project uses?",
        },
        { //checkbox that allows license choice
            type: 'list',
            name: 'license',
            message: 'Please choose a license.',
            choices: ['GNU AGPLv3', 'GNU GPLv3',
              'GNU LGPLv3', 'Mozilla Public License 2.0',
              'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
              'The Unlicense'],
          },
        {
            type: 'input',
            name: 'contributing',
            message: "Please name anyone involved who contributed to the project",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please give details of testing",
        },
        {
            type: 'input',
            name: 'repoLink',
            message: "Please insert your repo link for Github",
        },
        {
            type: 'input',
            name: 'questions',
            message: "Enter email address to to contact you if readers have questions",
        },
        
    ])

// Create a variable with backticks to use the info gained from above questions
// to build up the README.MD using markdown.

let readmeData = `

# ${title}

## Description
${description}

<img src="https://img.shields.io/badge/License-${license}-blue.svg">

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation} 

## Usage

${usage} 

## License
This project invokes the: ${license} 

## Contributing

The following are contributors of the project<br>
${contributing} 

## Tests
${tests} 

## Questions
This repo can be found here ${repoLink}<br>
If you have any questions please email ${questions}

`

// using file system we generate a README.MD file from the readmeData variable

await fs.writeFile('./output/README.md', readmeData);