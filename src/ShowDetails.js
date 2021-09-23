import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countryInfo } from "./api-requests";

export default function ShowDetails() {
  const [countryDetails, setCountryDetails] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    countryInfo().then((response) => {
      setCountryDetails(response);
    });
  }, [country]);

  return (
    <div>
      <h3>Details</h3>
      {countryDetails
        .filter((item) => item.name === country)
        .map(({ name, capital, languages, currencies, area, flags }, index) => {
          return (
            <div key={index}>
              <h3>{`Country Name: ${name}`}</h3>
              <p>{`Capital City: ${capital}`}</p>
              <p>{`Currency: ${currencies[0].name}`}</p>
              <p>{`Most Popular Language: ${languages[0].name}`}</p>
              <p>{`Area: ${area} sq km`}</p>
              <img width="100" src={flags[1]} alt="country flag" />
            </div>
          );
        })}
    </div>
  );
}
