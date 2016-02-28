var path = require('../local_libraries/path');
var __rootdirname = path.join(__dirname, '/../');

module.exports = {
  root: __rootdirname,
  actions: path.join(__rootdirname, '/local_actions'),
  applications: path.join(__rootdirname, '/local_applications'),
  components: path.join(__rootdirname, '/local_components'),
  configurations: path.join(__rootdirname, '/local_configurations'),
  data: path.join(__rootdirname, '/local_data'),
  libraries: path.join(__rootdirname, '/local_libraries'),
  models: path.join(__rootdirname, '/local_models'),
  paths: path.join(__rootdirname, '/local_paths'),
  prepublications: path.join(__rootdirname, '/prepublications'), 
  publications: path.join(__rootdirname, '/publications'),
  routes: path.join(__rootdirname, '/local_routes'),
  schemas: path.join(__rootdirname, '/local_schemas'),
  servers: path.join(__rootdirname, '/local_servers'),
  stores: path.join(__rootdirname, '/local_stores'),
  views: path.join(__rootdirname, '/local_views')
};