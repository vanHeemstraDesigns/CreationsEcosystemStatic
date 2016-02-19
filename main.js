/*
 * main.js
 * 
 * This module is specific to the application(s)
 */
import React from './libraries/react';
import Router from './libraries/react-router';
import ReactDOM from './libraries/react-dom';
import createBrowserHistory from './libraries/history/lib/createBrowserHistory';
import routes from './local_routes/creation_ecosystem_route';

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>, document.getElementById('app')
);
