const path = require('path');
const { isPagesExist } = require('../utils');

const targetPath = path.resolve('src/pages');
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
        return isPagesExist(value) ? 'Page name already exists!' : true;
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
    // {
    //   type: 'add',
    //   path: `${componentPath}/{{pascalCase name}}/index.js`,
    //   templateFile: 'components/index.hbs',
    //   abortOnFail: true,
    // },
    // {
    //   type: 'add',
    //   path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.vue`,
    //   templateFile: 'components/vue.hbs',
    //   abortOnFail: true,
    // },
    // {
    //   type: 'add',
    //   path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.stories.js`,
    //   templateFile: 'components/stories.hbs',
    //   abortOnFail: true,
    // },
  ]
};
