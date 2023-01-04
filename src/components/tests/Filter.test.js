import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Filter from '../Filter';

describe('Filter component test', () => {
  test('should render', () => {
    const filter = render(
      <Provider store={store}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(filter).toMatchSnapshot();
  });

  test('get continents', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(getByTestId('North America')).toHaveTextContent('North America');
    expect(getByTestId('South America')).toHaveTextContent('South America');
    expect(getByTestId('Asia')).toHaveTextContent('Asia');
    expect(getByTestId('Africa')).toHaveTextContent('Africa');
    expect(getByTestId('Europe')).toHaveTextContent('Europe');
  });
});
