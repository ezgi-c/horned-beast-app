import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: { background: "#965fa3" },
    };
  }

  handleClick = () => {
    // if (this.state.background === { background: "#965fa3" }) {
      this.setState({
        background: {
          background:
            "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
        },
      });
    // } else {
    //   this.setState({ background: { background: "#965fa3" } });
    // }
  };

  // not able to change color back ^^

  render() {
    return (
      <div
        className="Header"
        style={this.state.background}
        onClick={this.handleClick}
        // figured out where to put onClick without the bootstrap
      >
        <h1>🦄 Gallery of Horns 🦄</h1>
      </div>
    );
  }
}

export default Header;
