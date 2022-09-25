import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


  class FuzzySearch extends React.Component {

    // handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    // }

    render (){
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formFuzzySearch">
          <Form.Label>Fuzzy Search</Form.Label>
          <Form.Control type="text" placeholder="search by title or keyword" />
          <Form.Text className="text-muted">
            example: unicorn, narwhal, cute, etc.
          </Form.Text>
        </Form.Group>

        <Button variant="info" type="submit" onClick={this.handleSubmit}>
          Search
        </Button>
      </Form>
    );
  }
}
  
  export default FuzzySearch