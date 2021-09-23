import React, { useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import ShowDetails from "./ShowDetails";
import { allCountries, countryByRegion } from "./api-requests";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const { region } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    if (region) {
      countryByRegion(region).then((response) => {
        setCountries(response);
      });
    } else {
      allCountries().then((response) => {
        setCountries(response);
      });
    }
  }, [region]);

  return (
    <div>
      <h2>Countries</h2>
      <p>Select a Country to view the details about it.</p>
      {countries.map((country, index) => {
        return (
          <ul key={index}>
            <Link to={`${url}/${country.name}`}>
              <button>{country.name}</button>
            </Link>
          </ul>
        );
      })}
      <div>
        <hr />
        <Route path={`${path}/:country`}>
          <ShowDetails />
        </Route>
      </div>
    </div>
  );
}
