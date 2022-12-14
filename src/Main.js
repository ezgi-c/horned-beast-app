import React from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import FuzzySearch from "./FuzzySearch";
import HornSearch from "./HornSearch";
import { Container } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleShowModal: this.props.handleShowModal,
      data: this.props.data,
      // horns: '',
      input: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      this.setState({ input: e.target.value });
      this.setState({
        data: this.state.data.filter(
          (beast) =>
            beast.title.includes(this.state.input) ||
            beast.keyword.includes(this.state.input) ||
            beast.description.includes(this.state.input) ||
            beast.title.includes(this.state.input)
        ),
      });
    } else {
      this.setState({ input: "" });
      this.setState({ data: this.props.data });
    }
  };

  handleHornSelection = (e) => {
    e.preventDefault();
    const selection = Number(e.target.value);
    // console.log("event target value:", e.target.value);
    selection
      ? this.setState({
          data: this.props.data.filter((beast) => beast.horns === selection),
        })
      : this.setState({ data: this.props.data });
    };
  // got help from Ethan to use 'selection' by itself as the condition and converting to ternary
  // got help from TA to filter this.props.data instead of this.state.data

    // if (selection) {
    //   this.setState({ data: this.props.data.filter((beast) => beast.horns === selection) });
    // } else {
    //   this.setState({ data: this.props.data });
    // }

  render() {
    return (
      <div className="Main">
        <Container className="forms">
        <FuzzySearch handleInput={this.handleInput} />
        <br />
        <HornSearch handleHornSelection={this.handleHornSelection} />
        </Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.state.data.map((beast) => (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              handleShowModal={this.state.handleShowModal}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Main;
