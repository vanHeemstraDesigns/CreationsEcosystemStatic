// Routes.jsx
var React = require('react')
// OLD var Router = require('react-router') // ReactJS version 0.13.x
// OLD var Route = Router.Route  // ReactJS version 0.13.x

var ReactRouter = require('react-router') // ReactJS version 1.0
var Router = ReactRouter.Router // ReactJS version 1.0
var Route = ReactRouter.Route // ReactJS version 1.0

var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
  </Route>
)

module.exports = Routes