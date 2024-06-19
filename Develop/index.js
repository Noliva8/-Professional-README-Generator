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
        choices : ["MIT", "Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "Creative Commons", "CC0", "GNU" , "IBM" ]

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


// FUNCTION TO GENERATE BADGES

    const badge = (license) => {
    if (license === "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (license === "Apache License 2.0") {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (license === "Boost Software License 1.0") {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    if (license === "BSD 3-Clause License") {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
    if (license === "Creative Commons") {
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    }
    return '';  // Return an empty string if no valid license is selected
};

 

 
//  FUNCTION TOGENERATE README

const generateREADME= (answers) => {
    return `# ${answers.title}

${badge(answers.license)}

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
