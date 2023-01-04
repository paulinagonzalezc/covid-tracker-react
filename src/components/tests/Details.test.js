import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Details from '../Details';

describe('Details component test', () => {
  test('should render', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(details).toMatchSnapshot();
    const title = screen.getByText(/Today Cases:/);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('today-cases');
  });
});