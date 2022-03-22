//get repo and user info
const getRepo = require('./src/promptInfo');
//generate page content
const generatePage = require('./src/template');
//generate MD file
const writeFile = require('./utils/generateFile');

// run the app 
getRepo().then(generatePage).then(writeFile);
