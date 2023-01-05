import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Country = (props) => {
  const { name, flag, cases } = props;
  return (
    <div className="country-container">
      <div className="detail-title">
        <Link to={`details/${name}`} data-testid="detail-link"><ArrowForwardIcon className="arrow" /></Link>
        <h2 className="country-title" data-testid={name}>{name}</h2>
      </div>
      <img className="country-flag" alt="flag" src={flag} />
      <p className="country-cases">
        Total Cases:
        {' '}
        {cases}
      </p>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
