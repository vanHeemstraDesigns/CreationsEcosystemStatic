import React from '../libraries/react';
import {Route} from '../libraries/react-router';
import App from '../local_components/App';
import Home from '../local_components/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);