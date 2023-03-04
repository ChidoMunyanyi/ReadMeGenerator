//grm = Generate Read Me
class grm {
    static generateReadMe(answers) {
        return 

 # ${answers.title}

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

   
      }
}


export default grm