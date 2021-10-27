import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import Fetch from "./component/Fetch";
import Itemlist from "./component/Itemlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Fetch} />
        <Route exact path="/itemlist" component={Itemlist} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
