import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './home.css';

export default class extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <div className="container">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to="/" exact activeClassName="active">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/login" activeClassName="active">login</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/news" activeClassName="active">News</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/profile" activeClassName="active">Profile</NavLink></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          </div>
        </Navbar>
      </>
    )
  }
}
