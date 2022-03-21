const inquirer = require('inquirer');
//get the info from user
const promptTitle = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: `What's the title of this project`,
      default: 'readme-generator',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('please enter the title of this project');
          return false;
        }
      }
    }
  ]);
};

promptTitle().then(dataTitle => {
  console.log(dataTitle);
});
