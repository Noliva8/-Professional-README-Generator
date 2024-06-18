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
    
 
inquirer.prompt(questions)
.then((answers) => {
    console.log(answers)
  });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', 'data', (err) => (err) ? console.error(err) : console.log('README.md has been created successfully!') )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
