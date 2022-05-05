// TODO: Create a function that returns a license badge based on which license is passed in

const license = require("../license");

// If there is no license, return an empty string
let licenseB = ''
function renderLicenseBadge(license) {  
    switch(license) {
        case 'none':
            console.log('you chose' + none)
            break;

        case 'MIT':
          licenseB += `[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)`
          break;
        
        case 'Apache': 
        licenseB += `[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
          break;
        
          case 'GNU GPLv3':
          licenseB += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
          break;

          case 'BSD':
          licenseB += `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
          break;

          case 'Eclipse':
          licenseB += `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
          break;

          case 'Mozilla':
          licenseB += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
          break;
    }
return licenseB;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseL =''
  switch(license) {
    case 'none':
        console.log('you chose' + none)
        break;

    case 'MIT':
      licenseL += `https://opensource.org/licenses/MIT`
      break;
    
    case 'Apache': 
    licenseL += `https://www.apache.org/licenses/LICENSE-2.0.txt`
      break;
    
      case 'GNU GPLv3':
      licenseL += `https://www.gnu.org/licenses/gpl-3.0-standalone.html`
      break;

      case 'BSD':
      licenseL += `https://opensource.org/licenses/BSD-3-Clause`
      break;

      case 'Eclipse':
      licenseL += `https://www.eclipse.org/legal/epl-2.0/`
      break;

      case 'Mozilla':
      licenseB += `https://www.mozilla.org/en-US/MPL/2.0/`
      break;
}
return licenseL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license)
  let licenseLink = renderLicenseLink(license)
  
  return `## License
   This repository is licensed under: 
   ${license}
   ${licenseBadge}

   Use the link below to gather details on the license.
   ${licenseLink}
   `

}

function renderContents (Contents) {
  let contentC = ''
  switch(Contents) {
    case 'description':
      contentC += `[description](##Description)`
      break;
    case 'Installation': 
      contentC += `[Installation](##Installation)`
      break;
    case 'Usage':
      contentC += `[Usage](##Usage)`
      break;
    case 'How to Contribute':
      contentC += `[How to Contribute](##How to Contribute)`
      break;
    case 'Tests':
      contentC += `[Tests](##Tests)`
      break;
    case 'Questions':
      contentC += `[Questions](##Questions)`
      break;
  }

  return contentC;
};

function generateTBC (Contents){
  let con = renderContents(Contents)
  return `## Table of Contents

  ${con}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
    
## Description
    
    ${data.description}
    
    - ${data.motivation}
    - ${data.why}
    - ${data.problems}
    
    
${generateTBC(data.Contents.answer)}
    

${renderLicenseSection(data.license)}
    
## Installation
    
   ${data.installation}.
    
## Usage
    
    ${data.usage}.
    
    
## How to Contribute
    
   ${data.contribution}.
    
## Tests
    
    ${data.tests}.
## Quesitons  

   Github: ${data.username}
   Email: ${data.email}

    `;
}

module.exports = generateMarkdown;
