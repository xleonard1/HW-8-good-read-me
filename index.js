const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like to name your README?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'what was your Motivation?',

        },
        {
            type: 'input',
            name: 'why',
            message: 'why did you build this project?',
        },
        {
            type: 'input',
            name: 'problems',
            message: 'What problems does it solve?',
        },
        {
           type: 'checkbox',
           name: 'Contents',
           message: 'select all of the sections to be included in the table of contents to make it easy for users to find what they need',
           choices: ['description', 'Installation', 'Usage', 'How to Contribute', 'Tests', 'Questions'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Tell others how they should contribute',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions on how to run your tests.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose a license',
            choices: ['no license', 'MIT', 'GNU GPLv3', 'Apache', 'BSD', 'Eclipse', 'Mozilla'],

        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github UserName',
        },
        {
            type: 'input',
            name: 'email',
            messasge: 'please enter a valid email',
        }
    ]);
};


const init = () => {
    promptUser()
    .then ((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('succesfully wrote to README.md'))
    .catch((err) => console.log(err));
    
};




init()