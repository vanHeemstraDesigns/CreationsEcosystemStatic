var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');

var config = {
  //entry: "./src/www/entry.js",
  entry: [path.join(__dirname, '/src/app/app.jsx')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js", ".jsx"]
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },  
  //output: {
  //  path: __dirname + '/src/www',
  //  filename: "bundle.js"
  //},

  //output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js'  //Name of output file
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

module.exports = config;