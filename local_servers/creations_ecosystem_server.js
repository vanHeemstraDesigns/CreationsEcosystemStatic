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


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../publications')));


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
