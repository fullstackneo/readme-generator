const inquirer = require('inquirer');
let p1 = inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: `What's the title of this project`
  }
]);

p1.then(data => {
  console.log(p1);

  console.log(data);
}).then(b => {
  console.log(2); //这行代码被执行了
});
