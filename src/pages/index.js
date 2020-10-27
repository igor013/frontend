import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./auth/login";


import Home from "./App.js";
import Profile from "./profile/index";




const history = createBrowserHistory();


function Indexapp() {


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>

  );

}

export default Indexapp;
