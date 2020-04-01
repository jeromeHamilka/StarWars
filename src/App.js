import React, { Component } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  DisplayFullCharacter;
  render() {
    return (
      <div className="App">
        <Navbar />
        <Characters />
      </div>
    );
  }
}

export default App;
