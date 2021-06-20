import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countryInfo } from "./api-requests";

export default function ShowDetails() {
  const [countryDetails, setCountryDetails] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    countryInfo().then((response) => {
      console.log(response);
      setCountryDetails(response);
    });
  }, [country]);

  return (
    <div>
      <h3>Details</h3>
      {countryDetails.filter((item) => item.name === country).map(
        ({ name, capital, languages, currencies, area, flag }, index) => {
          return (
            <div key={index}>
              <h2>{name}</h2>
              <p>{capital}</p>
              <p>{currencies[0].name}</p>
              <p>{languages[0].name}</p>
              <p>{area}</p>
              <img width='100' src={flag} alt='country flag'/>
            </div>
          );
        }
      )}
    </div>
  );
}
