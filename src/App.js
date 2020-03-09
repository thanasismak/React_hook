import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import Router from './Home'
import Page2 from './components/page2';
const App = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path={'/'} component={Page2}/>
      <Route exact path={'/Page2'} component={Page2} />
      <Route exact path={'/Section1'} />
      <Route exact path={'/Section2'} />
    </Switch>
  </Router>
);

export default App;