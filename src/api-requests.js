const axios = require("axios");
const baseURL = "https://restcountries.com/v3.1";

// function that returns all of the countries
export function allCountries() {
  return axios
    .get(baseURL + "/all")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      console.error("No data found!");
    });
}

// function that searches the countries by region
export function countryByRegion(region) {
  return axios
    .get(`${baseURL}/region/${region}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.error("No data found!");
    });
}

// function that returns the info for each country
export function countryInfo() {
  return axios
    .get(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,latlng,area,languages,flag"
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.error("No data found!");
    });
}
