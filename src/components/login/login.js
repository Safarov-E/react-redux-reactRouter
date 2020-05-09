import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import './login.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.textValue = React.createRef();
    this.passwordValue = React.createRef();
    this.state = {
      show: false
    }
  }
  registrationUser = (event) => {
    event.preventDefault();
    if(this.textValue.current.value === 'Admin' && 
        this.passwordValue.current.value === '12345') {
          localStorage.setItem('registration', 'true');
        }
    else {
      this.setState({show: true})
    }
  }
  handleClose = () => {
    this.setState({show: false})
  }
  render() {
    return (
      <div className="container distance">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" ref={this.textValue} />
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={this.passwordValue} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.registrationUser}>
            Submit
          </Button>
        </Form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ошибка!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Данные введены неверно</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
