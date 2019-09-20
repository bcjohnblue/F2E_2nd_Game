const componentGenerator = require('./components');
const viewsGenerator = require('./views');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('views', viewsGenerator);
};
