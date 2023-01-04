import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Country from '../Country';

describe('Country component test', () => {
  test('should render', () => {
    const country = render(
      <Provider store={store}>
        <BrowserRouter>
          <Country
            key={1}
            id={1}
            name="Mexico"
            flag="https://disease.sh/assets/img/flags/mx.png"
            cases={2800}
          />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(country).toMatchSnapshot();
    const title = screen.getByText(/Mexico/);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('country-title');
    expect(screen.getByTestId('detail-link')).toBeInTheDocument();
  });
});
