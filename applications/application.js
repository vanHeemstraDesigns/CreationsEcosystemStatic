/*
 * Application
 * 
 */
module.exports = function() {
	var _Application = {};
	config = require('../configs/server.js');
	var configs = config.configs,
		server_prefix = configs.server_prefix || 'PREFIX';
	var express = require('express');
	console.log(server_prefix + " - Applications application required.");
	_Application = express();
	return _Application;
}();//calls itself
