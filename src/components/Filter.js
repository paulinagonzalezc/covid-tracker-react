import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries';

const Filter = () => {
  const continents = ['All', 'North America', 'South America', 'Africa', 'Asia', 'Europe', 'Australia-Oceania'];
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="main-title">Daily Worldwide COVID-19 Cases Data</h1>
      <div className="buttons">
        {
    continents.map((continent) => (
      <button
        className="continent-button"
        key={continent}
        type="button"
        data-testid={continent}
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
    </div>
  );
};

export default Filter;
