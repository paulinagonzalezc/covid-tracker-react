import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Nav from '../Nav';

describe('Nav component test', () => {
  test('should render', () => {
    const nav = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(nav).toMatchSnapshot();
  });

  test('Get element in Nav component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        ,
      </Provider>,
    );
    const heading = screen.getByText(/Covid Stats/);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('nav-title');
  });
});
