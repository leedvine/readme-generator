import inquirer from 'inquirer';

import fs from 'fs/promises'


let {title, description, repoLink, license} = await inquirer
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
            name: 'repoLink',
            message: "Please insert your repo link (requires full URL including https://)",
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
        
    ])


let readmeData = `

# <span style="color: red; text-decoration: underline">${title}</span>

## Overview
${description}
![${license}](./src/${license}.svg)

## Table of Contents
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions

## Project Links
Repo Link: ${repoLink}

## License
This project invokes the: ${license} 

`




await fs.writeFile('./output/README.md', readmeData);