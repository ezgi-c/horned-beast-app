import React from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";



class HornSearch extends React.Component {

  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formHornSearch">
            <Form.Label>Filter Beasts by Number of Horns</Form.Label>
            <Form.Select onChange={this.props.handleHornSelection}>
              <option value="">All Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default HornSearch;
