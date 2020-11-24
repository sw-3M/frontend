import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Test } from './component/test';
import { Last } from './component/test' 
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/Test" component={Test}/>
      <Route path="/Last" component={Last}/>
      </Switch>
      </Router>
      )
}

export default App;
