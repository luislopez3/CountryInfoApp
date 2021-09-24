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

  const showDetails = (e) => {
    e.preventDefault();
    return (
    <contianer>
      <nav>
        <a href="#details"> </a>
      </nav>
    </contianer>
    );
  };

  return (
    <div>
      <h1>Countries</h1>
      <p>Select a Country to view the details about it.</p>
      {countries.map((country, index) => {
        return (
          <div className="country-row">
            <ul className="country-column" key={index}>
              <Link to={`${url}/${country.name}`}>
                <button onClick={(e) => showDetails}>{country.name}</button>
              </Link>
            </ul>
          </div>
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
