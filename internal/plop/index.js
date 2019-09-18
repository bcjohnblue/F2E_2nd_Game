const componentGenerator = require('./components');
// const containerGenerator = require('./containers');
const pages = require('./pages');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  // plop.setGenerator('container', containerGenerator);
  // plop.setGenerator('page', pages);
};