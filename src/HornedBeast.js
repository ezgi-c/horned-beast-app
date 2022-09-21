import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: "",
      clicks: 1,
      // Q: why doesnt it work when it's 0?
    };
  }

  handleClick = () => {
      this.setState({ clicks: this.state.clicks + 1})
      this.setState({ favorites: "💜" + this.state.clicks });
    };

  render() {
    return (
      <Container className="Cards">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Favorites: {this.state.favorites}</Card.Text>

            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              onClick={this.handleClick}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default HornedBeast;
