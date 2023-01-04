import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchDetail } from '../redux/details';

const Details = () => {
  const routeParams = useParams();
  const detail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(routeParams.name));
  }, [dispatch]);
  return (
    <div className="details-container">
      <NavLink to="/" className="arrow-back"><ArrowBackIcon /></NavLink>
      <img className="detail-image" alt="flag" src={detail.flag} />
      <div className="country-wrapper">
        <h1 className="country-name">{detail.country}</h1>
        <ul className="country-details" data-testid="country-details">
          <li className="detail">
            <span className="today-cases">Today Cases:</span>
            <span>{detail.todayCases}</span>
          </li>
          <li className="detail">
            <span className="total-cases">Total Cases:</span>
            <span>{detail.cases}</span>
          </li>
          <li className="detail">
            <span className="today-deaths">Today Deaths:</span>
            <span>{detail.todayDeaths}</span>
          </li>
          <li className="detail">
            <span className="total-deaths">Total Deaths:</span>
            <span>{detail.deaths}</span>
          </li>
          <li className="detail">
            <span>Country Population:</span>
            <span>{detail.population}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
