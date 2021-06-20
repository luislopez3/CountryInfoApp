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
      <p>Click the button to view the details about this Country.</p>
      {countryDetails.filter((item) => item.name === country).map(
        ({ name, capital, languages, currencies, flag }, index) => {
          return (
            <li key={index}>
              <h2>{name}</h2>
              <p>{capital}</p>
              <p>{currencies[0].name}</p>
              <p>languages</p>
              <img width='100' src={flag} alt='country flag'/>
            </li>
          );
        }
      )}
    </div>
  );
}
