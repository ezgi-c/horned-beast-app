import React from "react";
import { Card, Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  addFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  capturesSelectedBeast = () => this.props.handleShowModal(this.props.title);
  

  render() {
    return (
      <Col className="p-4">
      <Container className="h-100">
        <Card id="beast" className="h-100">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>🦄: {this.state.favorites}</Card.Text>

            <Card.Img className="cardImg"
              variant="top"
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              onClick={this.addFavorites}
            />        
           
          </Card.Body>
          <Card.Footer>
          <Button className="button"
             onClick={this.capturesSelectedBeast}>
              🔍
            </Button>
          </Card.Footer>
        </Card>
      </Container>
      </Col>
    );
  }
}

export default HornedBeast;
