import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import BinsMain from './components/bins/BinsMain';
import BinsList from './components/bins/BinsList';
import { Bins } from '../imports/collections/bins';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain}></Route>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});