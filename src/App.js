import React, { Children } from 'react';
import { Router, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import Page2 from './components/page2';
import Body from './components/embendedbody';
const App = () => (
  // <Router {...props}>
  //   <Switch>
  //     <Route exact path={'/'} />
  //     <Route exact path={'/page2'} component={Page2} />
  //     <Route exact path={'/section1'} />
  //     <Route exact path={'/section2'} />
  //   </Switch>
  // </Router>
  <BrowserRouter>
    <Home />
    <Switch>
      <Route exact path={'/'} component={Body} />
      <Route exact path={'/Page2'} component={Page2} />
      <Route exact path={'/Section1'} component={Body} />
      <Route exact path={'/Section2'} component={Body} />
    </Switch>
  </BrowserRouter>
);

export default App;