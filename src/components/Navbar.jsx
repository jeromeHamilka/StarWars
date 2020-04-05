import React from "react";
import logo from "./images/Galactic_Republic.svg";
import logo1 from "./images/Star_Wars_Logo.svg";
import "./Characters.css";

const Navbar = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Star War By Jérôme</p>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo1" alt="logo" />
      </header>
    </div>
  );
};

export default Navbar;
