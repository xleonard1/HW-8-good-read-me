const inquirer = require('inquirer')
const fs = require('fs')

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
           type: 'input',
           name: 'Contents',
           message: 'Add a table of contents to make it easy for users to find what they need',
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
            name: 'Tests',
            message: 'Provide instructions on how to run your tests.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'choose a license',
            choices: ['no license', 'MIT License', 'GNU GPLv3'],

        }
    ]);
};


const init = () => {
    promptUser()
    

}

init()