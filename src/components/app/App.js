import React from 'react';
import Home from '../home';
import Login from '../login';
import News from '../news';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

export default class extends React.Component {
  render() {
    return (
      
      <Router>
        <Navbar bg="primary" variant="dark">
          <div className="container">
          <Nav className="mr-auto links">
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/login" activeClassName="active">login</NavLink>
            <NavLink to="/news" activeClassName="active">News</NavLink>
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          </div>
        </Navbar> 
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/> 
          <Route path="/news" component={News}/> 
        </Switch>
      </Router>
    )
  }
}