import React from "react";
import "./App.css";
import Header from "./Header";
import Beast from "./HornedBeast"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Beast 
          title = {'Rhino'}
          imageUrl = {"https://upload.wikimedia.org/wikipedia/commons/4/4f/Rhino_%28234581759%29.jpeg"}
          description = {'has 2 horns'}
        />  
        <Beast 
          title = {'Bull'}
          imageUrl = {"https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg1NTI0NDItaW1hZ2Uta3d2eG0zazkuanBn.jpg"}
          description = {'has 2 horns'}
        />
        <Beast 
          title = {'Unicorn'}
          imageUrl = {"https://st2.depositphotos.com/1428083/9392/i/950/depositphotos_93920026-stock-photo-unicorn-and-northern-lights.jpg"}
          description = {'has 1 horn'}
        />
      </div>
    )
  }
}

export default App;

