import React from "react";
import "./App.css";
import Header from "./Header";
import Beast from "./Beast"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Beast 
          title = {'Rhino'}
          description = {'has 1 horn'}
        />  
        <Beast 
          title = {'Bull'}
          description = {'has 2 horns'}
        />
        <Beast 
          title = {'Unicorn'}
          description = {'has 1 horn'}
        />
      </div>
    )
  }
}

export default App;
