// rendering license badges
function renderLicenseBadges(License) {

    if (License === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (License === 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else if (License === 'AGPLV3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }

}

//rendering license links
function renderLicenseLinks(License) {
    
    if (License === 'MIT') {
        return `https://choosealicense.com/licenses/mit/`
    }
    else if (License === 'ISC') {
        return `https://choosealicense.com/licenses/isc/`
    }
    else if (License === 'AGPLV3') {
        return `https://choosealicense.com/licenses/agpl-3.0/`
    }
    else {
        return 'N/A'
    }
}

//rendering license section
function renderLicenseSection(License) {
    if (License) {
        return `Licensed under ${renderLicenseLinks(License)} license`
    }
    else (License) => {
        return ''
    }
}

// generating ReadMe
function generateReadMe(answers) {
    return ` 

# ${answers.Title}
${renderLicenseBadges(answers.License)}

## Table of Contents
[Description](#description)
<br/>
[Installation](#installation)
<br/>
[Usage](#usage)
<br/>
[Contributing](#contributing)
<br/>
[Test](#tests)
<br/>
[Questions](#questions)
<br/>
[License](#license)
<br/>
       
 ## Description
    ${answers.Description}
       
## Installation
    ${answers.Installation}
       
## Usage
    ${answers.Usage}
       
    
## Contributing
    ${answers.Contributing}
       
## Tests
    ${answers.Tests}
       
## Questions
    ${answers.QuestionsEmail}
    ${answers.QuestionsGithub}

## License
    ${renderLicenseSection(answers.License)}
   

       `

}



export default generateReadMe 
