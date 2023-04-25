// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'Project'
    },
    {
        type: 'input',
        message: 'what is your project description',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What command should be run to install your dependencies?',
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
        type: 'list',
        message: 'What License are you using?',
        name: 'License',
        choices: [
            'MIT',
            'Apache',
            'none'
        ]
    
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

function writeToFile(document, data) {
    let contents = generateMarkdown(data);
    fs.writeFile(document, contents, function (err) {
        if (err)
        return console.log(err)
        console.log('Congratulations! A new ReadMe has been generated')
    });
}


    
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


function init() {
    inquirer.prompt(questions).then(function(data) {
        let document = 'README.md';
        writeToFile(document, data)
    })
}
// Function call to initialize app
init();
