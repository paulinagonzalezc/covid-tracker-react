import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const GET = 'covid-tracker-react/countriesReducer/GET';

const filterCountries = (countries, filter) => {
  if (filter) {
    return countries.filter((country) => country.continent === filter);
  }
  return countries;
};

// Reducer
const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const allCountries = action.payload.data.map((country) => ({
        id: uuidv4(),
        country: country.country,
        flag: country.countryInfo.flag,
        cases: country.cases,
        continent: country.continent,
      }));
      return filterCountries(allCountries, action.payload.filter);
    }
    default: {
      return state;
    }
  }
};

// Action creator
// export const getCountries = (payload) => ({
//   type: GET,
//   payload,
// });

// API
export const fetchCountries = createAsyncThunk(GET, async (filter) => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await response.json();
  return { data, filter };
});

export default countriesReducer;
