import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './news.css';

class News extends React.Component {
  render() {
    return (
      <div className="container distance d-flex flex-wrap justify-content-around">
        {
          this.props.news.map((item) => {
            return (
              <Card className="news" style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.images}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link className="btn btn-primary" to={'/news/' + item.id}>Узнать подробнее</Link>
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
