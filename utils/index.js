// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'what is your project title?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'what is your project description',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What are your installation instructions ',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'What is your usage information',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'information about running tests',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'Whats is your email address?',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'Username'
    }
];

function writeToFile(fileName, data) {}

    
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers)
        console.log(generateMarkdown(answers))
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
    
}

// Function call to initialize app
init();
