import React from "react";
import Card from "react-bootstrap/Card";
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

  render() {
    return (
      <Col className="p-4">
      <Container className="h-100">
        <Card id="beast" className="h-100">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>🦄: {this.state.favorites}</Card.Text>

            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              onClick={this.addFavorites}
            />
          </Card.Body>
        </Card>
      </Container>
      </Col>
    );
  }
}

export default HornedBeast;
