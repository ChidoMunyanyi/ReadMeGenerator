import fs from 'fs';

import generateReadMe from './assets/generatingreadme.js';

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Description of project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Contents of project',
      name: 'Table of Contents ',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'License Name',
        name: 'License',
        choices: ['MIT', 'ISC', 'AGPLv3' ],
        // filter(val) {
        //   return val.toLowerCase();
        // }
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Test Instruction',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Email for Questions',
        name: 'QuestionsEmail',
    },
    {
      type: 'input',
      message: 'Github Username',
      name: 'QuestionsGithub',
    }

  ])
    .then((answers) => {
    const grm = generateReadMe(answers)
    fs.writeFile('ReadMe.md', grm, function(error) {
      if(error) {console.log('Sorry, file not saved!') }
      else {console.log('Success, file saved')}
    })

  })
  .catch((error) => { console.log(error) })
  
 
