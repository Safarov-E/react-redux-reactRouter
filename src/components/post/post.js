import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends React.Component {
  render() {
    return (
      <div className="container distance">
        {
          this.props.post.map((item) => {
            if(this.props.match.params.id === item.id.toString()) {
              return (
                <Card style={{ width: '100%' }} key={item.id}>
                  <Card.Img variant="top" src={item.images} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Link className="btn btn-primary" to="/news">Вернуться назад</Link>
                  </Card.Body>
                </Card>
              )
            }
          })
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    post: state.news.post
  }
}
export default connect(mapStateToProps)(Post);
