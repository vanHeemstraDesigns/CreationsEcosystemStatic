import React from '../local_libraries/react';
import {Route} from '../local_libraries/react-router';
import App from '../local_applications/characters-application';
import Home from '../local_components/Home';
console.log('Creations Ecosystem Routes - called');

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);