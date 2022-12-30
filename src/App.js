import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CountriesContainer from './pages/CountriesContainer';

const App = () => (
  <div className="main-container">
    <Nav />
    <Routes>
      <Route path="/" element={<CountriesContainer />} />
    </Routes>
  </div>
);

export default App;
