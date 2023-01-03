import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries';

const Filter = () => {
  const continents = ['All', 'North America', 'South America', 'Africa', 'Asia', 'Europe', 'Australia-Oceania'];
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Daily Worldwide COVID-19 Cases Data</h1>
      {
    continents.map((continent) => (
      <button
        key={continent}
        type="button"
        onClick={() => {
          if (continent === 'All') {
            dispatch(fetchCountries());
            return;
          }
          dispatch(fetchCountries(continent));
        }}
      >
        {continent}
      </button>
    ))
    }
    </div>
  );
};

export default Filter;
