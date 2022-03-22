//get repo and user info
const getRepo = require('./src/promptInfo');
//generate template
const generatePage = require('./src/template');
//generate MD file
const writeFile = require('./utils/generateFile');

getRepo().then(generatePage).then(writeFile);
