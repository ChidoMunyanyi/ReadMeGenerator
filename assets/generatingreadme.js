
function renderLicenseBadges(License) {
    // const badges = {
    //     mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    //     isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    //     gplv2: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    // }
if(License==='MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
else if(License)
}
 
// function renderLicenseLinks(License) {
//     const links = {
//         mit: 'https://choosealicense.com/licenses/mit/',
//         isc: 'https://choosealicense.com/licenses/isc/',
//         gplv2: 'https://choosealicense.com/licenses/agpl-3.0/',
//     }
//     return links(answers.license)
// }

//  function renderLicenseSection(License) {
//     if(License) {
//       return `Licensed under ${this.renderLicenseLinks(License)} license`
//     }
//     else(License) => {
//         return '' }
//  }

function generateReadMe(answers) {
     return` 

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

