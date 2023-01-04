import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Countries from '../Countries';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{ 
    id: "3a522094-46e4-4e8d-bde9-423c688fcfec",
    country: "Afghanistan",
    flag: "https://disease.sh/assets/img/flags/af.png",
    cases:207654,
    continent:"Asia" },
    {
    id: "51752a2a-9ba9-409c-aff2-3036c14cc911",
    country: "Albania",
    flag: "https://disease.sh/assets/img/flags/al.png",
    cases:333812,
    continent:"Europe"
    }]),
}));

afterEach(() => {
  fetch.mockClear();
});

describe('Countries component test', () => {
  test('should render', () => {
    const countries = render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
        ,
      </Provider>,
    );
    const tree = countries;
    expect(tree).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});