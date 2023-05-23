const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:'
    },
]).then(({
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    username,
    email
}) => {
    const readmeTemplate = `# ${title}
## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [@${username}](https://github.com/${username})
Email: ${email}
`;

    fs.writeFile('README.md', readmeTemplate, (err) =>
        err ? console.error(err) : console.log('README.md has been created')
    );
});
