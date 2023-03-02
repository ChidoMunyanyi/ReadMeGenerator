// const inquirer = require('inquirer'); or import inquirer from 'inquirer'; add type: "module" to package.json under main 


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
        message: 'Usage',
    },
    {
        type: 'input',
        message: 'License name',
        name: 'License',
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
        message: 'Questions,',
        name: 'Questions',
    }

  ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );