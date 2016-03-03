/*
 * main.js
 * 
 */
import React from '../libraries/react';
import Router from '../libraries/react-router';
import ReactDOM from '../libraries/react-dom';
import createBrowserHistory from '../libraries/create-browser-history';
import routes from '../routes/creations-ecosystem-routes';
import Navbar from '../local_components/Navbar';

console.log('Inside main.js');

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>, document.getElementById('app')
);
