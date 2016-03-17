/*
 * Application
 * 
 */
module.exports = function() {
  var _Application = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  var app = _Application;
  config = require(path.join(paths.configurations, '/configurations.js'))(app);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  var express = require(path.join(paths.libraries, '/express.js'))
  console.log(server_prefix + " - Applications application required.");
  _Application = express();
  return _Application;
};//does not call itself
