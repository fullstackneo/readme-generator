// generate the README.MD in dist
const fs = require('fs');

module.exports = pageMD => {
  fs.writeFile('./dist/README.MD', pageMD, err => {
    err ? console.log(err) : console.log('README.MD generated!');
  });
};
