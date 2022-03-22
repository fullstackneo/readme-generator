const inquirer = require('inquirer');

//get the user info
const promptUser = () => {
  return inquirer.prompt([
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
  ]);
};
// get the repo info 
const promptRepoData = pageData => {
  {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: `Project's Title:`,
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('please enter the title of this project!');
              return false;
            }
          }
        },
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
          type: 'list',
          name: 'license',
          message: 'License:',
          choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
          type: 'input',
          name: 'installation',
          message: `Installation Command:`,
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
          name: 'test',
          message: `Testing Command:`,
          validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('please enter testing command!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: `About Using the Repo:`,
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
          message: `About Contributing to the Repo:`,
          validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('please enter ontribution guidline!');
              return false;
            }
          }
        }
      ])
      .then(repoData => {
        // conbine user and repo info together into one obj
        pageData.repoData = repoData;
        return pageData;
      });
  }
};

module.exports = () => promptUser().then(promptRepoData);
