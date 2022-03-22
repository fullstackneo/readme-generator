const fs = require('fs');

const generateBadge = license => {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'None':
      return ``;
  }
};

const generateLicense = license => {
  if (license === 'None') {
    return `
  This project is not licensed`;
  } else {
    return `
  This project is licensed under the ${license.split(' ')[0]} license`;
  }
};

const generateRepoInfo = repoData => {
  const { title, description, installation, usage, contribution, test, license } = repoData;
  return `# ${title}

  ${generateBadge(license)}

---

  ## Description
  ${description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#Questions)


  ## Installation
  To install necssary dependencies, run the following command:
  \`\`\`
  ${installation}
  \`\`\`

  ## Usage
  ${usage}
  
  ## Contributing
  ${contribution}

  ## Tests

  \`\`\`
  ${test}
  \`\`\`

  ## License

  ${generateLicense(license)}

  ---
  `;
};

const generateContacts = contacts => {
  const { github, email } = contacts;
  return `
  ## Questions:

  Please feel free to follow me on [github](https://github.com/${github}) or send me your questions to ${email}
  `;
};

module.exports = pageData => {
  const { repoData, ...contacts } = pageData;
  return `${generateRepoInfo(repoData)}
  ${generateContacts(contacts)}
    `;
};


