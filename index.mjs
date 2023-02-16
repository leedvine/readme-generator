import inquirer from 'inquirer';

import fs from 'fs/promises'


let {title, overview} = await inquirer
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
    ])

// console.log(first_name, last_name);

let readmeData = `

# ${title}
## Overview
${overview}

`

await fs.writeFile('README.md', readmeData);