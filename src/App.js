import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.state = {
      show: false,
      selectedBeast: {},
    };
  }

  handleCloseModal = () => {
    this.setState({ show: false });
  };

  handleShowModal = (beastTitle) => {
    const selectedBeast = data.find(beastObj => beastObj.title === beastTitle);
    this.setState({ show: true, selectedBeast });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main 
        data={data} 
        handleShowModal={this.handleShowModal} 
        />

        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
