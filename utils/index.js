// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [{Project, Description, Installation, Usage, Contributing, Tests }];

function writeToFile('index.js', data) {}

inquirer.prompt([
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
        message: 'installation instructions ',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'usage information',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'contribution guidelines',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'tests',
        name: 'Tests'
    }

]).then(generateQuestions)
    
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
