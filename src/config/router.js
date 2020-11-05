import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../screens/login";
import Home from "../screens/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home/:id" component={Home} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
