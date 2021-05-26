//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
//STLYING IMPORTS
import "../src/index.css";
import logo from "../src/weight.PNG"
//COMPONENT IMPORTS
import CreateClass from './components/CreateClass'
import Home from './components/Home'
import EditClass from './components/EditClass'
import InstructorPage from './components/InstructorPage'

function App() {
  return (
    <div>
      <div className="mainHeadingLogoCombo">
      <h1>Anywhere Fitness</h1>
      <img className="logo" src={logo} alt="gym kettlebell" />
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        {/* <Route path = "/login">
          <Login/>
        </Route>

        <Route path = "/signup">
          <Signup/>
        </Route> */}


        {/* <Route exact path = "/instructor">
          <InstructorPage/>
        </Route>

        <Route path='/create-class'>
          <CreateClass/>
        </Route> */}

        <Route path = "/instructor">
          <InstructorPage/>
        </Route>

        <Route path = "/instructor/edit-class/:ClassId">
          <EditClass/>
        </Route>

      </Switch>
      </div>
    </div>
  );
}

export default App;
