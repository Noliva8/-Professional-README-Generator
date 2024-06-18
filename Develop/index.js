// Packages importation

const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const questions = [

    {
        type:"input",
        name: "title",
        message:" what is your project title?"

    },

     {
        type:"input",
        name: "description",
        message:" what is your project description?"

    },

     {
        type:"input",
        name: "installation",
        message:" what are installation instructions?"

    },
     {
        type:"input",
        name: "usage",
        message:" what is the usage information?"

    },


     {
        type:"input",
        name: "contribution",
        message:" what are the contribution guidelines?"

    },

     {
        type:"input",
        name: "test",
        message:" what are the text instruction ?"

    },


     {
        type:"list",
        name: "license",
        message:" which licence for this project?",
        choices : ["MIT", "GNU General Public License (GPL)", "GNU Lesser General Public License (LGPL)", "Apache License (Apache-2.0)", "BSD License", "Mozilla Public License (MPL)", "End User License Agreement (EULA) ", "Perpetual License" ]

    },


     {
        type:"input",
        name: "username",
        message:" what is your github username?",
    },

       {
        type:"input",
        name: "email",
        message:" what is your email?",
    },

];
    
 
//  FUNCTION TOGENERATE README

const generateREADME= (answers) => {
    return 
`# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue.svg)
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
For questions about this project, please visit [${answers.username}](https://github.com/${answers.username}) on GitHub.
You can also reach out to ${answers.email} with additional questions.
`;
}


// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
