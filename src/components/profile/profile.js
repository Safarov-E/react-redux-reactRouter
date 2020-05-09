import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './profile.css';

export default class extends React.Component {
  handlerExit = () => {
    delete localStorage.registration;
    window.location.reload();
  }
  render() {
    return (
      <div className="container">
        {  
          localStorage.registration === 'true' ?
          <Jumbotron className="distance">
            <h1>Поздравляем!</h1>
            <p>
              Аккаунт успешно авторизован на сайте.
            </p>
            <p>
              <Button variant="primary" onClick={this.handlerExit}>Выйти</Button>
            </p>
          </Jumbotron>
          :
          <Redirect to="/login" />
        }
      </div>
    )
  }
}
