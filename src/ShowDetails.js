import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { countryInfo } from "./api-requests";

export default function ShowDetails() {
  const [countryDetails, setCountryDetails] = useState([]);
  const { country } = useParams();
  const details = useRef(null);

  useEffect(() => {
    countryInfo().then((response) => {
      setCountryDetails(response);
      showDetails();
    });
  }, [country]);

  const showDetails = () => {
    details.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h1>Details</h1>
      {countryDetails
        .filter((item) => item.name === country)
        .map(
          (
            { flag, name, capital, languages, currencies, population, area },
            index
          ) => {
            return (
              <div ref={details} key={index}>
                <img width="300" src={flag} alt="country flag" />
                <h3>{`Country Name: ${name}`}</h3>
                <p>{`Capital City: ${capital}`}</p>
                <p>{`Currency: ${currencies[0].name}`}</p>
                <p>{`Most Popular Language: ${languages[0].name}`}</p>
                <p>Population: {new Intl.NumberFormat().format(population)}</p>
                <p>Area: {new Intl.NumberFormat().format(area)} sq/km</p>
              </div>
            );
          }
        )}
    </>
  );
}
