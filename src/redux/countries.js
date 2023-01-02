import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const GET = 'covid-tracker-react/countriesReducer/GET';

// Reducer
const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        id: uuidv4(),
        country: action.payload[key].country,
        flag: action.payload[key].countryInfo.flag,
        cases: action.payload[key].cases,
        continent: action.payload[key].continent,
      }));
    default:
      return state;
  }
};

// Action creator
export const getCountries = (payload) => ({
  type: GET,
  payload,
});

// API
export const fetchCountries = createAsyncThunk(GET, async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await response.json();
  // console.log(data);
  return data;
});

export default countriesReducer;
