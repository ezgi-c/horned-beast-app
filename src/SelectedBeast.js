import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="beastModal">
          {this.props.selectedBeast.description}
          <Image
            className="beastModalImg"
            variant="top"
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.description}
            title={this.props.selectedBeast.title}
            fluid 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
