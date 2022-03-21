const inquirer = require('inquirer');
//get the info from user
const promptRepoTitle = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: `What's the title of this project`,
      //   default: 'readme-generator',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('please enter the title of this project!');
          return false;
        }
      }
    }
  ]);
};
const promptRepoData = repoData => {
  {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'description',
          message: `Description:`,
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('please enter description!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'installation',
          message: `Installation Instruction:`,
          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('please enter installation instruction!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: `Usage Information:`,
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('please enter usage information!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'contribution',
          message: `Contribution Guidline:`,
          validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('please enter ontribution guidline!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'test',
          message: `Test Instruction:`,
          validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('please enter ontribution guidline!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'License:',
          choices: ['MIT', 'MIT', 'MIT']
        }
      ])
      .then(introData => {
        repoData.repoInfo = introData;
        return repoData;
      });
  }
};

const promptContact = repoData => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'github',
        message: 'Your Github Username:',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your Email:',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('please enter your email address!');
            return false;
          }
        }
      }
    ])
    .then(contactData => {
      repoData.contacts = contactData;
      console.log(repoData);

      return repoData;
    });
};

promptRepoTitle().then(promptRepoData).then(promptContact);
