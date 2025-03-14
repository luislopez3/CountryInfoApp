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
      <h1>Countries</h1>
      <p>Select a Country to view the details about it.</p>
      {countries.map((country, index) => {
        return (
          <div className="country-row" key={index}>
            <div className="country-column" key={index}>
              <ul key={index}>
                <Link to={`${url}/${country.name.common}`}>
                  <button type="button">{country.name.common}</button>
                </Link>
              </ul>
            </div>
          </div>
        );
      })}
      <div>
        <Route path={`${path}/:country`}>
          <ShowDetails />
        </Route>
      </div>
    </div>
  );
}
