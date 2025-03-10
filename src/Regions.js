import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Countries from "./Countries";

export default function Regions() {
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { url, path } = useRouteMatch();

  return (
    <>
      <h1>Regions</h1>
      <p>Select a region to view the Countries within it.</p>
      {regionList.map((region, index) => {
        return (
          <div className="country-row" key={index}>
            <div className="country-column" key={index}>
              <ul key={index}>
                <Link to={`${url}/${region}`}>
                  <button>{region}</button>
                </Link>
              </ul>
            </div>
          </div>
        );
      })}
      <Route path={`${path}/:region`}>
        <Countries />
      </Route>
    </>
  );
}
