const fs = require('fs');
const path = require('path');

const componentNames = fs.readdirSync(path.resolve('src/components'));
const viewNames = fs.readdirSync(path.resolve('src/views'));

const isComponentExist = comp => componentNames.indexOf(comp) > 0;
const isViewsExist = comp => viewNames.indexOf(comp) > 0;

module.exports = {
  isComponentExist,
  isViewsExist
};
