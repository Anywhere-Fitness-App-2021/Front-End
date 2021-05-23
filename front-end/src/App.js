//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
//STLYING IMPORTS
import "../src/index.css";
import logo from "../src/weight.PNG" 

function App() {
  return (
    <div>
      <div className="mainHeadingLogoCombo">
      <h1>Anywhere Fitness</h1>
      <img className="logo" src={logo} alt="gym kettlebell" />
      </div>
    </div>
  );
}

export default App;
