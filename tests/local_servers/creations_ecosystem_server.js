/*
 * creations_ecosystem_server.js
 */

// Babel ES6/JSX Compiler: needs to be at the top
require('babel-register');

// Core Node.js modules — path, querystring, http. 
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var _ = require('../local_libraries/underscore');

var swig  = require('swig');
var React = require('../local_libraries/react');

//var ReactDOM = require('../local_libraries/react-dom/server'); This doesn't find the module correctly
var ReactDOM = require('react-dom/server');

var Router = require('../local_libraries/react-router');
var routes = require('../local_routes/creations_ecosystem_routes');

// Third-party NPM libraries — mongoose, express, request.
var mongoose = require('../local_libraries/mongoose');

// Application files — controllers, models, config.
//TEMP COMMENTED OUT var Character = require('../local_models/character');
var config = require('../local_configurations/creations_ecosystem_configurations.js');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../publications')));

// Database
// We will set the database hostname in creations_ecosystem_configurations.js to avoid hard-coding the value here.
/* TEMP COMMENTED OUT
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
*/

/** ROUTES - these should best be moved to their individual route files **/
/** These need all be place BEFORE/ABOVE React Middleware **/

/**
 * POST /api/characters
 * Adds new character to the database.
 */


 /**
 * GET /api/characters
 * Returns 2 random characters of the same gender that have not been voted yet.
 */


 /**
 * PUT /api/characters
 * Update winning and losing count for both characters.
 */


/**
 * GET /api/characters/count
 * Returns the total number of characters.
 */


 /**
 * GET /api/characters/search
 * Looks up a character by name. (case-insensitive)
 */


 /**
 * GET /api/characters/top
 * Return 100 highest ranked characters. Filter by gender, race and bloodline.
 * For example, if we are interested in the Top 100 male characters with Caldari race and Civire bloodline, 
 * this would be the URL path for it:
 * GET /api/characters/top?race=caldari&bloodline=civire&gender=male
 */


 /**
 * GET /api/characters/shame
 * Returns 100 lowest ranked characters.
 */


 /**
 * GET /api/characters/:id
 * Returns detailed character information.
 *
 * NOTE: This should come BELOW/AFTER GET /api/characters/ ... routes
 */


 /**
 * POST /api/report
 * Reports a character. Character is removed after 4 reports.
 */


 /**
 * GET /api/stats
 * Returns characters statistics.
 */


 // React Middleware
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('../local_views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);

// ... more




server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

/* OLD
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
*/