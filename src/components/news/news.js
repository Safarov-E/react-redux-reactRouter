import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import './news.css';

class News extends React.Component {
  render() {
    console.log(this.props.news)
    return (
      <div className="container distance d-flex flex-wrap justify-content-between ">
        {
          this.props.news.map((item) => {
            return (
              <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.images}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Узнать подробнее</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    news: state.news.current
  }
}
export default connect(mapStateToProps)(News);
