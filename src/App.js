import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Countries from "./Countries";
import Regions from "./Regions";

export default function App() {
  return (
    <Router>
      <div className="header">
        <Link className="header-links" to="/">Welcome</Link> 
        <Link className="header-links" to="/regions">Regions</Link>
        <Link className="header-links" to="/countries">All Countries</Link>
        <hr />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/regions">
          <Regions />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
      </div>
    </Router>
  );
}
