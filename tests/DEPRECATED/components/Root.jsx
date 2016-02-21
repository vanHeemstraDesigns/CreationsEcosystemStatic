// components/Root.jsx
var React = require('react')
// OLD var Router = require('react-router') // ReactJS version 0.13.x
var ReactRouter = require('react-router') // ReactJS version 1.0
var Router = ReactRouter.Router // ReactJS version 1.0
var RouteHandler = Router.RouteHandler

var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <RouteHandler {...this.props} />
        </body>
      </html>
    )
  }
})

module.exports = Root