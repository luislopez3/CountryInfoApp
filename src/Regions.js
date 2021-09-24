import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Countries from "./Countries";

export default function Regions() {
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Regions</h1>
      <p>Select a region to view the Countries within it.</p>
      {regionList.map((region, index) => {
        return (
          <div className="country-row">
            <ul className="country-column" key={index}>
              <Link to={`${url}/${region}`}>
                <button>{region}</button>
              </Link>
            </ul>
          </div>
        );
      })}
      <hr />
      <Route path={`${path}/:region`}>
        <Countries />
      </Route>
    </div>
  );
}
