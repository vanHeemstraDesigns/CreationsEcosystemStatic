//import React from '../libraries/react'; //Currently this fails
import React from '../local_libraries/react';

import {Route} from '../local_libraries/react-router';
import App from '../local_components/App';
import Home from '../local_components/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);