import { fetchCountries, getCountries } from '../countries';

describe('rocket reducer test', () => {
  it('Expect ID of second mission to be 2', () => {
    expect(getCountries(2).payload).toBe(2);
  });

  it('Expect type to be BOOK', () => {
    expect(getCountries(2).type).toBe('covid-tracker-react/countriesReducer/GET');
  });

  it('Expects the result of fetchCountries function', () => {
    const country = {};
    const result = fetchCountries(country);
    expect(typeof result).toBe('function');
  });
});