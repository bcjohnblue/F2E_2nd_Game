const fs = require('fs');
const path = require('path');

const componentNames = fs.readdirSync(path.resolve('src/components'));
// const containerNames = fs.readdirSync(path.resolve('src/containers'));
const pageNames = fs.readdirSync(path.resolve('src/pages'));

const isComponentExist = comp => componentNames.indexOf(comp) > 0;
// const containerExists = comp => containerNames.indexOf(comp) > 0;
const isPagesExist = comp => pageNames.indexOf(comp) > 0;

module.exports = {
  isComponentExist,
  // containerExists,
  isPagesExist
};