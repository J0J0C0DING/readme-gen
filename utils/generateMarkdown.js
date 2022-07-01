function renderLicenseSection(license) {
  if (license) {
    return `https://img.shields.io/badge/License-${license}-blue`;
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributing)
  - [Testing](#testing)


  ## Installation
  ${installation()}

  ## Usage
  ${data.usage}

  !(Image Descriptor)[Image url] <---- Image Template for screenshots

  ## License
  ![license](${renderLicenseSection(data.license)})

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testing}

  ## Questions
  If you have any questions, you can reach me at:
  - [GitHub: ${data.username}](https://github.com/${data.username})
  - [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
