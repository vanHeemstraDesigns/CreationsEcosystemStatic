// entry.js
var React = require('react');
// OLD var Router = require('react-router'); // ReactJS version 0.13.x
var ReactRouter = require('react-router'); // ReactJS version 1.0
var Router = ReactRouter.Router; // ReactJS version 1.0
var Routes = require('./Routes.jsx');

module.exports = function render(locals, callback) {

  /* OLD ReactJS version 0.13.x
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToStaticMarkup(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
  */
  /* NEW ReactJS version 1.0 */
  render(<Router>{Routes}</Router>, el)
  
}