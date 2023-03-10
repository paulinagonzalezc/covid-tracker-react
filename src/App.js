import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CountriesContainer from './pages/CountriesContainer';
import CountryDetails from './pages/CountryDetails';
import './styling/App.css';
import './styling/Nav.css';
import './styling/Filter.css';
import './styling/Countries.css';
import './styling/Country.css';
import './styling/Details.css';

const App = () => (
  <div className="main-container">
    <Nav />
    <Routes>
      <Route path="/" element={<CountriesContainer />} />
      <Route path="/details/:name" element={<CountryDetails />} />
    </Routes>
  </div>
);

export default App;
