# CreationsEcosystemStatic
Creations Ecosystem - Static

How to run:

Open two Terminal tabs.

In one tab run 'npm run gulp' to build the app, concatenate vendor files, compile LESS stylesheets and watch for file changes. 

In another tab, run 'npm run watch' to start the Node.js server and automatically restart the process on file changes.

P.S. In package.json we have made sure 'gulp' and 'nodemon' are installed globally.

Both gulp and npm run watch processes will take care of everything for us. We no longer need to worry about re-compiling the app after adding new React components or restarting the Express app after making changes to server.js.

## MongoDB - An open-source document database that provides high performance, high availability, and automatic scaling. 

Install MongoDB after downloading it from https://www.mongodb.org/downloads following these instructions https://docs.mongodb.org/manual/installation/

Open a new tab in Terminal and run mongod. If you are on Windows, you will need to open mongod.exe in the directory where you installed MongoDB.

On Windows, type <path to mongodb/bin/>mongod.exe <ENTER> to start Mongo demon (the database server).

On Mac OS X or Linux, type <path to mongodb/bin>mongod <ENTER> to start Mongo demon (the database server). The default location of mongod is /data/db

To stop MongoDB, press Control+C in the terminal where the mongod instance is running.

Read the Getting Started guide at https://docs.mongodb.org/manual/#getting-started for more information.

## Mongoose - Elegant mongodb object modeling for node.js

http://mongoosejs.com/docs/

# Sources:

Overall structure based on the tutorial at http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/ with its source code on Github at https://github.com/sahat/newedenfaces-react

====== WE HAVE SO FAR IMPLEMENTED UP TO Step Step 19. Deployment ======

## Main.js

The main.js is the entry point for our React application. We use it in gulpfile.js where Browserify will traverse the entire tree of dependencies and generate the final bundle.js file. You will rarely have to touch this file after its initial setup.

## React

A very quick but clear tutorial about React is https://egghead.io/lessons/react-react-in-7-minutes

## React Router

React Router bootstraps the routes from routes.js file, matches them against a URL, and then executes the appropriate callback handler, which in this case means rendering a React component into <div id="app"></div>. But how does it know which component to render? Well, for example, if we are on / URL path, then {this.props.children} will render the Home component, because that's what we have specified in routes.js.

## React Routes (Server-Side)

To be found as middleware inside server.js.

## React Components

What all these components have in common:
1) Set the initial component state to what's in the store.
2) Add a store listener in componentDidMount, remove it in componentWillUnmount.
3) Add onChange method which updates component's state whenever the store is updated.

## Schema vs. Model

A schema is just a representation of your data in MongoDB. This is where you can enforce a certain field to be of particular type. A field can also be required, unique or contain only specified characters.
While a schema is just an abstract representation of the data, a model on the other hand is a more practical object with methods to query, remove, update and save data from/to MongoDB.

## HTML5 History API

We are using createBrowserHistory to enable HTML5 History API in order to make URLs look pretty. For example, it navigates to http://localhost:3000/add instead of http://localhost:3000/#add. Since we are building an Isomorphic React application (rendered on the server and the client) we do not have to do any hacky wildcard redirects on the server to enable this support. It just works out of the box.

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

## Gulp vs. Grunt

See http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp

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

## ES5 versus ES6

An ES6 Crash Course is provided on http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/

## ReactJS

A ReactJS Crash Course is provided on http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/

See the book 'Thinking in React' at https://facebook.github.io/react/docs/thinking-in-react.html

## JS vs. JSX

Notice the difference in syntax.

## Flux Architecture

A Flux Architecture Crash Course is provided on http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/

## Toastr

We will be using Toastr (http://codeseven.github.io/toastr/demo.html) JavaScript library for notifications. 

## Docco - a quick-and-dirty documentation generator

The source code is/will be written in such a way that Docco can autogenerate the documentation.

See http://jashkenas.github.io/docco/
=======


