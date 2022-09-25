import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import BeastModal from "./BeastModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.state = {
      showBeastModal: false,
      selectedBeast: {},
    };
  }

  handleCloseModal = () => {
    this.setState({ showBeastModal: false });
  };

  handleShowModal = (beastTitle) => {
    const selectedBeast = data.find(beastObj => beastObj.title === beastTitle);
    this.setState({ showBeastModal: true, selectedBeast: selectedBeast });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main 
        data={this.data} 
        handleShowModal={this.handleShowModal} 
        />
        <BeastModal
          show={this.state.showBeastModal}
          handleClose={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
