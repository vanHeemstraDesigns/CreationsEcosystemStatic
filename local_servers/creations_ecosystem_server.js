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
var React = require('../local_libraries/react'); // WORKS!
// FOR TESTING ONLY
console.log('React version: ', React.default.version);

//var ReactDOM = require('../local_libraries/react-dom/server'); // This doesn't find the module correctly
var ReactDOM = require('react-dom/server');  // WORKS!
// FOR TESTING ONLY
console.log('ReactDOM version: ', ReactDOM.version);

var Router = require('../local_libraries/react-router'); // WORKS!
// FOR TESTING ONLY
console.log('Router: ', Router);

var routes = require('../local_routes/creations_ecosystem_routes');

// Third-party NPM libraries — mongoose, express, request.
var mongoose = require('../local_libraries/mongoose'); // WORKS!
// FOR TESTING ONLY
console.log('Mongoose: ', mongoose);

// Application files — controllers, models, config.
//TEMP COMMENTED OUT: var Character = require('../local_models/character'); // This requires Mongoose to be set up correctly
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
app.post('/api/characters', function(req, res, next) {
  console.log('Route POST /api/characters called');
  // more...
});

 /**
 * GET /api/characters
 * Returns 2 random characters of the same gender that have not been voted yet.
 */
app.get('/api/characters', function(req, res, next) {
  console.log('Route GET /api/characters called');
  // more...
});

 /**
 * PUT /api/characters
 * Update winning and losing count for both characters.
 */
app.put('/api/characters', function(req, res, next) {
  console.log('Route PUT /api/characters called');
  // more...
});

/**
 * GET /api/characters/count
 * Returns the total number of characters.
 */
app.get('/api/characters/count', function(req, res, next) {
  console.log('Route GET /api/characters/count called');
  // more...
});

 /**
 * GET /api/characters/search
 * Looks up a character by name. (case-insensitive)
 */
app.get('/api/characters/search', function(req, res, next) {
  console.log('Route GET /api/characters/search called');
  // more...
});

 /**
 * GET /api/characters/top
 * Return 100 highest ranked characters. Filter by gender, race and bloodline.
 * For example, if we are interested in the Top 100 male characters with Caldari race and Civire bloodline, 
 * this would be the URL path for it:
 * GET /api/characters/top?race=caldari&bloodline=civire&gender=male
 */
app.get('/api/characters/top', function(req, res, next) {
  console.log('Route GET /api/characters/top called');
  // more...
});

 /**
 * GET /api/characters/shame
 * Returns 100 lowest ranked characters.
 */
app.get('/api/characters/shame', function(req, res, next) {
  console.log('Route GET /api/characters/shame called');
  // more...
});

 /**
 * GET /api/characters/:id
 * Returns detailed character information.
 *
 * NOTE: This should come BELOW/AFTER GET /api/characters/ ... routes
 */
app.get('/api/characters/:id', function(req, res, next) {
  console.log('Route GET /api/characters/:id called');
  // more...
});

 /**
 * POST /api/report
 * Reports a character. Character is removed after 4 reports.
 */
app.post('/api/report', function(req, res, next) {
  console.log('Route POST /api/report called');
  // more...
});

 /**
 * GET /api/stats
 * Returns characters statistics.
 */
app.get('/api/stats', function(req, res, next) {
  console.log('Route GET /api/stats called');
  // more...
});  

 // React Middleware
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      console.log('Inside React Middelware - err');
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      console.log('Inside React Middelware - redirectLocation');      
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log('Inside React Middelware - renderProps');      
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('../local_views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      console.log('Inside React Middelware - else');
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  console.log('Inside IO Sockets - on connection');
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    console.log('Inside IO Sockets - on disconnect');
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

/**
 * Server.listen
 */
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

/* OLD
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
*/