// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown');
// const { generatePrime } = require('crypto');
// const generateMarkdown = require('./generateMarkdown');
// const { filter } = require('rxjs');

const questions = [
    {
        type: 'input',
        message: 'what is your project title?',
        name: 'Project'
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
        Message: 'What License are you using?',
        name: 'License',
        // Choice: ['MIT', 'ISC'],
        // filter(choice) {
        //     return choice.toUpperCase();
        // }
    
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

function writeToFile(filename, data) {
    fs.writeToFile(filename, data, (err) => {
        if (err)
        throw err;
        console.log('Congratulations! A new ReadMe has been generated')
    })
}

// function init() {
//     inquirer.prompt(questions)
//     .then(function (data) {
//         console.log(data)
//         writeToFile("README.md", generateMarkdown(data))
//     }) 
// }
    
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const gen = generateMarkdown.generateReadme(answers)
        fs.writeFile(generateMarkdown, data)
        // Use user feedback for... whatever!!
       
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.log('Could not generate README.md')
          // Prompt couldn't be rendered in the current environment
        } else {
            console.log('Success new README.me Generated')
          // Something else went wrong
        }
      });
    
}

// Function call to initialize app
init();
