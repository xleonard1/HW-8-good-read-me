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
            name: 'tests',
            message: 'Provide instructions on how to run your tests.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'choose a license',
            choices: [,'no license', 'MIT License', 'GNU GPLv3'],

        },
    ]);
};

const generateReadMe = ({title, description, motivation, why, problems, contents, installation, usage, contribution, tests, license}) => 
    `
    # <${title}>
    
    ## Description
    
    ${description}
    
    - ${motivation}
    - ${why}
    - ${problems}
    
    
    ## Table of Contents
    ${contents}
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    
    ## Installation
    
   ${installation}.
    
    ## Usage
    
    ${usage}.
    


    
    ## License
    
   ${license}.
    
    ---
    
     The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## How to Contribute
    
   ${contribution}.
    
    ## Tests
    
    ${tests}.`;


const init = () => {
    promptUser()
    .then ((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log('succesfully wrote to README.md'))
    .catch((err) => console.log(err));
}

init()