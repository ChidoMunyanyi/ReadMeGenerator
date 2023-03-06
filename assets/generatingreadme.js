
function renderLicenseBadges(License) {
    const badges = {
        mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        gplv2: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    }

    return badges(License)
}
 
function renderLicenseLinks(License) {
    const links = {
        mit: 'https://choosealicense.com/licenses/mit/',
        isc: 'https://choosealicense.com/licenses/isc/',
        gplv2: 'https://choosealicense.com/licenses/agpl-3.0/',
    }
    return links(answers.license)
}

 function renderLicenseSection(License) {
    if(License) {
      return `Licensed under ${this.renderLicenseLinks(License)} license`
    }
    else(License) => {
        return '' }
 }

function generateReadMe(answers) {
     return ` 

    ${answers.title}
    ${this.renderLicenseBadges(answers.license)}

    ## Table of Contents
    -[Description of Project](#Description)
    -[Installation Instructions](#Installation)
    -[Usage Information](#Usage)
    -[Contributing Guidelines](#Contributing)
    -[Test Instructions](#Tests)
    -[Questions](#Questions)
    -[License Name](#License)
       
    ## Description
    ${answers.description}
       
    ## Installation
    ${answers.installation}
       
    ## Usage
    ${answers.usage}
       
    ## Contributing
    ${answers.contributing}
       
    ## Tests
    ${answers.tests}
       
    ## Questions
    ${answers.email}
    ${answers.github}

    ## License
    ${this.renderLicenseSection(answers.license)}

       `

      }



  export default generateReadMe

