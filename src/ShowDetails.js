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
            {
              flag,
              name,
              capital,
              languages,
              currencies,
              population,
              area,
              latlng,
            },
            index
          ) => {
            return (
              <div ref={details} key={index}>
                <img src={flag} alt={`${name}'s flag`} />
                <h3 className="country-info">
                  Country Name: <h4 className="country-details">{name}</h4>
                </h3>
                <p className="country-info">
                  Capital City: <p className="country-details">{capital}</p>
                </p>
                <p className="country-info">
                  Currency:{" "}
                  <p className="country-details">{currencies[0].name}</p>
                </p>
                <p className="country-info">
                  Most Popular Language:{" "}
                  <p className="country-details">{languages[0].name}</p>
                </p>
                <p className="country-info">
                  Population:{" "}
                  <p className="country-details">
                    {new Intl.NumberFormat().format(population)}
                  </p>
                </p>
                <p className="country-info">
                  Area:{" "}
                  <p className="country-details">
                    {new Intl.NumberFormat().format(area)} km² (
                    {new Intl.NumberFormat().format(
                      Math.round(area * 0.621371)
                    )} mi²)
                  </p>
                </p>
                <p className="country-info">
                  Lat/Lng:{" "}
                  <p className="country-details">
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 2,
                    }).format(latlng[0])}{" "}
                    /{" "}
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 2,
                    }).format(latlng[1])}{" "}
                    (Coordinates in Decimal Degrees)
                  </p>
                </p>
              </div>
            );
          }
        )}
    </>
  );
}
