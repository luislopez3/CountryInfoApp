import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { countryInfo } from "./api-requests";

export default function ShowDetails() {
  const [countryDetails, setCountryDetails] = useState([]);
  const { country } = useParams();
  const details = useRef(null);

  // Fetch country information when the country param changes
  useEffect(() => {
    countryInfo().then((response) => {
      setCountryDetails(response);
    });
  }, [country]);

  // Trigger scrollIntoView after the countryDetails are set and rendered
  useEffect(() => {
    if (details.current) {
      details.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [countryDetails]);

  return (
    <>
      <h1>Details</h1>
      {countryDetails
        .filter((item) => item.name.common === country)
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
                <img src={flag} alt={`${name.common}'s flag`} />
                <h3 className="country-info">
                  Country Name:{" "}
                  <h4 className="country-details">{name.common}</h4>
                </h3>
                <p className="country-info">
                  Capital City:{" "}
                  <p className="country-details">{capital}</p>
                </p>
                <p className="country-info">
                  Currency:{" "}
                  <p className="country-details">
                    {currencies && Object.values(currencies)[0].name}
                  </p>
                </p>
                <p className="country-info">
                  Most Popular Language:{" "}
                  <p className="country-details">
                    {languages && Object.values(languages)[0]}
                  </p>
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
                    {new Intl.NumberFormat().format(Math.round(area * 0.621371))} mi²)
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
                    }).format(latlng[1])} (Coordinates in Decimal Degrees)
                  </p>
                </p>
              </div>
            );
          }
        )}
    </>
  );
}
