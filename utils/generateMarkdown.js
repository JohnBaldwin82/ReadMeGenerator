// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ReadMe
   ${data.Project}

  ## description
  ${data.Description}

  ## Installation Guidelines
  ${data.Installation}

  ## Usage Information
  ${data.Usage}

  ## Contribution Guidelines
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Emaill Address
  ${data.Email}

  ## GitHub Username
  ${data.Username}


`;
}

module.exports = generateMarkdown;
