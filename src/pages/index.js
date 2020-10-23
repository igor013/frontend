import React from "react";
import App from "./App";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from "history";
import Home from "./App.js";
import Profile from "./profile/index";


const history = createBrowserHistory();


function Indexapp() {


  return (
    <Router history={history}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
    </Switch> 
    </Router>

  );

}

export default Indexapp;
