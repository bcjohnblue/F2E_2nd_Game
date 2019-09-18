const path = require('path');
const { isComponentExist } = require('../utils');

const targetPath = path.resolve('src/components');
module.exports = {
  description: '添加 Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "請輸入 Component 的名稱",
      default: 'Button',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalid name!';
        return isComponentExist(value) ? 'Component name already exists!' : true;
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
