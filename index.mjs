import inquirer from 'inquirer';

import fs from 'fs/promises'


let {title, overview, repoLink} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the readme title?",
        },
        {
            type: 'input',
            name: 'overview',
            message: "Give brief overview of the project. Describe the overall premise and the main individual elements required to achieve project goals.",
        },
        {
            type: 'input',
            name: 'repoLink',
            message: "Please insert your repo link (requires full URL including https://)",
        },
    ])

// console.log(first_name, last_name);

let readmeData = `

# <span style="color: red; text-decoration: underline">${title}</span>

## Overview
${overview}

## Project Links
Repo Link: ${repoLink}

`

await fs.writeFile('./output/README.md', readmeData);