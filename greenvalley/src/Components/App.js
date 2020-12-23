import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom"
import Home from "./Home/Home"

import Nav from "./Nav/index"

function App() {

  return (
    <div className="App">

      <Nav />
      <Home />
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link> */}

      <Switch>
        {/* <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route> */}
      </Switch>
    </div>
  );

}


export default App;
