// We're calling it utils because the functionality really has nothing to do with the app's main functionality but rather with utilities we use to get the app working.
const fs = require('fs');

module.exports = pageMD => {
  fs.writeFile('./dist/README.MD', pageMD, err => {
    err ? console.log(err) : console.log('README.MD generated!');
  });
};
