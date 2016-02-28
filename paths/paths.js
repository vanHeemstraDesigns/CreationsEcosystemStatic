var path = require('../libraries/path');
var __rootdirname = path.join(__dirname, '/../');

module.exports = {
  root: __rootdirname,
  actions: path.join(__rootdirname, '/actions'),
  applications: path.join(__rootdirname, '/applications'),
  components: path.join(__rootdirname, '/components'),
  configurations: path.join(__rootdirname, '/configurations'),
  data: path.join(__rootdirname, '/data'),
  libraries: path.join(__rootdirname, '/libraries'),
  models: path.join(__rootdirname, '/models'),
  paths: path.join(__rootdirname, '/paths'),
  pre-publications: path.join(__rootdirname, '/pre-publications'), 
  publications: path.join(__rootdirname, '/publications'),
  routes: path.join(__rootdirname, '/routes'),
  schemas: path.join(__rootdirname, '/schemas'),
  servers: path.join(__rootdirname, '/servers'),
  stores: path.join(__rootdirname, '/stores'),
  views: path.join(__rootdirname, '/views')
};