import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH = 'covid-tracker-react/detailReducer/FETCH';

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return {
        country: action.payload.country,
        flag: action.payload.countryInfo.flag,
        todayCases: action.payload.todayCases,
        cases: action.payload.cases,
        todayDeaths: action.payload.todayDeaths,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered,
        population: action.payload.population,
      };
    default:
      return state;
  }
};

export const getDetail = (payload) => ({
  type: FETCH,
  payload,
});

export const fetchDetail = createAsyncThunk(FETCH, async (country) => {
  const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
  const data = await response.json();
  return data;
});

export default detailReducer;
