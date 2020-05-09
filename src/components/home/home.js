import React from 'react';
import img1 from './img/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg';
import img2 from './img/tropiki-gora-vodopad-rastitelnost.jpg';
import img3 from './img/371625-svetik.jpg';
import {Jumbotron, Container, Card, CardGroup} from 'react-bootstrap';
import './home.css';

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <Jumbotron fluid className="distance">
          <Container>
            <h1>Lorem Ipsum</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </Container>
        </Jumbotron>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Text>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    )
  }
}
