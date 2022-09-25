import React from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import FuzzySearch from "./FuzzySearch";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    handleShowModal: this.props.handleShowModal,
    };
  }



  render() {
    return (
      <div className="Main">
        <FuzzySearch/>
        <Row xs={1} sm={2} md={3} lg={4} >
          {this.props.data.map((beast) => (
            <HornedBeast
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
