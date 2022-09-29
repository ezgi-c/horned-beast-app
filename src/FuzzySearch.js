import React from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

class FuzzySearch extends React.Component {


  render() {
    return (
      <Container className="fuzzyform">
        <Form>
          <Form.Group className="mb-3" controlId="formFuzzySearch">
            <Form.Label>Fuzzy Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="search by title or keyword"
              onChange={this.props.handleInput}
            />
            <Form.Text className="text-muted">
              example: unicorn, narwhal, cute, etc.
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FuzzySearch;
