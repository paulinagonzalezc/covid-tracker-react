import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import { fetchCountries } from '../redux/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const { length } = countries;
  const dispatch = useDispatch();

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchCountries());
    }
  }, []);
  return (
    <div className="countries">
      {
      countries.map((country) => (
        <Country
          key={country.id}
          id={country.id}
          name={country.country}
          flag={country.flag}
          cases={country.cases}
        />
      ))
    }
    </div>
  );
};

export default Countries;
