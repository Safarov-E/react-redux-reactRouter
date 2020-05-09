import React from 'react';
import Home from '../home';
import Login from '../login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

export default class extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    )
  }
}