// Packages importation

const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const questions = [

    {
        type:"input",
        name: "title",
        message:" what is your project title?",
        validate: (answer) => {
            if(answer.trim() === ""){
                return " you need to provide a project title"
            }
            return true ;
        }

    },

     {
        type:"input",
        name: "description",
        message:" what is your project description?",
        validate: (answer) => {
            if(answer.length < 20){
                return 'your description is too short'
            }
            return true;
        }

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
        validate: (answer) => {
            if(answer.trim() === ""){
                return 'provide the valid username'
            }
            return true;
        }
    },

      {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (answer) => {
        const lowercaseAnswer = answer.toLowerCase();

        if (!lowercaseAnswer.includes('@')) {
            return 'Please provide a valid email address (must contain @)';
        }

        return true;
    }
}


];
    
 
//  FUNCTION TOGENERATE README

const generateREADME= (answers) => {
    return `# ${answers.title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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



// Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
     (err) ? console.error(err) : console.log('README.md has been successfully! created');
            
  
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt:', error);
        });
}

// Function call to initialize app
init();
