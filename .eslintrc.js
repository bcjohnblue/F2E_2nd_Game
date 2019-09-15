module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-unused-vars': ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  }
};
