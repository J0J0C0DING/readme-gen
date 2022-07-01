// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the name of your project!');
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: `Write a description for this project: (Required)`,
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please write a description for the project!');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'addInstallation',
    message: 'Would you like to add any installation instructions?',
    default: false,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install you project? (Required)',
    when: ({ addInstallation }) => {
      if (addInstallation) {
        return true;
      } else {
        return false;
      }
    },
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter steps to install your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project: (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please provie instructions on how to use your project!');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'addContributionGuidelines',
    message: 'Would you like to add contribution guidelines? (Recommended)',
    default: true,
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'How would you like others to contribute to this project? (Required)',
    when: ({ addContributionGuidelines }) => {
      if (addContributionGuidelines) {
        return true;
      } else {
        return false;
      }
    },
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please provide instructions on how you would like others to contribute');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'addTesting',
    message: 'Would you like to add a testing section?',
    default: false,
  },
  {
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? (Required)',
    when: ({ addTesting }) => {
      if (addTesting) {
        return true;
      } else {
        return false;
      }
    },
    validate: testingInput => {
      if (testingInput) {
        return true;
      } else {
        console.log('Please enter testing information!');
        return true;
      }
    },
  },
  {
    type: 'confirm',
    name: 'addLicense',
    message: 'Would you like to add a license?',
  },
  {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'BSD'],
    when: ({ addLicense }) => {
      if (addLicense) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username (Required)',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address: (Required)',
    validate: emailInput => {
      if (!emailInput) {
        console.log('Please enter a valid email!');
        return false;
      } else {
        return true;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    }
    console.log('Success! New README file created');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile(`example_README.md`, generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
