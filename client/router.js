import React from 'react';
import { Router, Route } from 'react-router';
import * as containers from 'containers';

export default (
  <Router>
    <Route path="/" component={containers.App}>
      <Route path="lang/:langName" component={containers.Lang} />
    </Route>
  </Router>
);
