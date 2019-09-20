const path = require('path');
const { isViewsExist } = require('../utils');

const targetPath = path.resolve('src/views');
module.exports = {
  description: 'add pages',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "Please enter Page's name",
      default: 'Main',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalid name!';
        return isViewsExist(value) ? 'Page name already exists!' : true;
      }
    }
  ],
  actions: () => [
    {
      type: 'add',
      path: `${targetPath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'templates/tsx.hbs',
      abortOnFail: true
    },
    {
      type: 'add',
      path: `${targetPath}/{{pascalCase name}}/{{pascalCase name}}.module.sass`,
      templateFile: 'templates/sass.hbs',
      abortOnFail: true
    }
  ]
};
