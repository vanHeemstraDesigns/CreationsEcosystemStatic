
# CreationsEcosystemStatic
Creations Ecosystem - Static


Sources:

Overall structure based on the tutorial at http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/ with its source code on Github at https://github.com/sahat/newedenfaces-react


## NPM Modules

These are all the packages that we will be using in this project. Let's briefly go over each package.

Package Name	Description
alt	            Flux library for React.
async	        For managing asynchronous flow.
body-parser	    For parsing POST request data.
colors	        Pretty console output messages.
compression	    Gzip compression.
express	        Web framework for Node.js.
history	        Manage session history in browsers, used by react-router.
mongoose	    MongoDB ODM with validation and schema support.
morgan	        HTTP request logger.
react	        React.
react-dom	    React rendering, it is no longer bundled with React.
react-router	Routing library for React.
request	        For making HTTP requests to EVE Online API.
serve-favicon	For serving favicon.png icon.
socket.io	    To display how many users are online in real-time.
swig	        To render the initial HTML template.
underscore	    Helper JavaScript utilities.
xml2js	        For parsing XML response from EVE Online API.

Run npm install in the Terminal to install the packages that we specified in the package.json.

## Gulp Tasks

Gulp Task	Description
vendor	Concatenates all JS libraries into one file.

browserify-vendor	For performance reasons, NPM modules specified in the dependencies array are compiled and bundled separately. As a result, bundle.js recompiles a few hundred milliseconds faster.
browserify	        Compiles and bundles just the app files, without any external modules like react and react-router.
browserify-watch	Essentially the same task as above but it will also listen for changes and re-compile bundle.js.
styles	            Compiles LESS stylesheets and automatically adds browser prefixes if necessary.
watch	            Re-compiles LESS stylesheets on file changes.
default	            Runs all of the above tasks and starts watching for file changes.
build	            Runs all of the above tasks then exits.

## Bower

Run bower install and wait for the packages to be downloaded and installed into the bower_components directory. You can change that path using the .bowerrc file.