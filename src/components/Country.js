import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const {
    id, name, flag, cases,
  } = props;
  return (
    <div className="rocket-container">
      <img className="rocket-image" alt="rocket" src={flag} />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-description">
          {id}
        </p>
        <p>{cases}</p>
        <h3>
          <Link to={`details/${name}`}>{name}</Link>
        </h3>
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Country;
