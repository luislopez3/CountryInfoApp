import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Countries from "./Countries";
import Regions from "./Regions";

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto", padding: 20 }}>
        <Link to="/">Welcome</Link> |<Link to="/regions">Regions</Link> |
        <Link to="/countries">All Countries</Link>
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
