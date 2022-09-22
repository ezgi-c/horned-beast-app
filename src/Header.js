import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // background: { background: "#965fa3" },
      colorSwitch: true,
    };
  }

  handleClick = () => {
    if (this.state.colorSwitch === true) {
      console.log("made it inside if statement");
      this.setState({
        colorSwitch: false,
      });
    } else {
      console.log("made it inside else statement");
      this.setState({ colorSwitch: true });
    }
  };

  // got help from Hex to change background color. used colorSwitch property instead of background

  render() {
    return (
      <div
        className="Header"
        // style={this.state.background}
        onClick={this.handleClick}
      >
        {this.state.colorSwitch ?
        <h1 id="pink-header">🦄 Gallery of Horns 🦄</h1>
        :
        <h1 id="rainbow-header">🦄 Gallery of Horns 🦄</h1>
      }
      </div>
    );
  }
}

export default Header;
