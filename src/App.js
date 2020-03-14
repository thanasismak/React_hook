import React from 'react';
import { Router, BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home'
import Page2 from './components/page2';
import Body from './components/embendedbody';
const App = () => (
  <BrowserRouter>
    <Home />
    <Switch>
      <Route exact path={'/'} component={Body} />
      <Route path={'/Page2'} component={Page2} />
      <Route path={'/Section1'} component={Body} />
      <Route path={'/Section2'} component={Body} />
    </Switch>
  </BrowserRouter>
);

export default App;