// const inquirer = require('inquirer'); or import inquirer from 'inquirer'; add type: "module" to package.json under main 
//const fs = require ('fs');
 


import inquirer from 'inquirer';
const questions = 
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
        message: 'License name',
        name: 'License',
        choices: ['MIT', 'ISC', 'GPLv2' ],
        filter(val) {
          return val.toLowerCase();
        }
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
        name: 'Questions',
    },
    {
      type: 'input',
      message: 'Github Username',
      name: 'Questions',
    }

  ])
  // function runQuestions () {
  //   return inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers)
    return answers

  })
  .catch((error) => { console.log(error) })

  

// .then((response) =>
  // fs.writeFile()
