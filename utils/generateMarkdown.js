// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project}


  ## Licensing:
  ![${data.License}](https://img.shields.io/badge/License-${data.License}-yellow.svg)

 
  ## Table of Contents
  - [Project Description](#Description)
  - [Installation Guidelines](#Installation)
  - [Usage Information](#Usage)
  - [Contributing Guidelines](#Contributing)
  - [Licenses](#License)
  - [Tests](#Tests)
  - [Email Address](#Email)
  - [GitHub Username](#Username)

 

  ## description:
  ${data.Description}

  ## Installation Guidelines:
  ${data.Installation}

  ## Usage Information:
  ${data.Usage}

  ## Contribution Guidelines:
  ${data.Contributing}

  ## Licenses:
  ${data.License} License.

  ## Tests:
  ${data.Tests} , "Error: no test specified

  ## Emaill Address:
  ${data.Email}

  ## GitHub Username:
  ${data.Username}


`;
}

module.exports = generateMarkdown;
