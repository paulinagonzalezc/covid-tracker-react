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
      <NavLink to="/"><ArrowBackIcon /></NavLink>
      <h1>{detail.country}</h1>
      <img className="detail-image" alt="flag" src={detail.flag} />
      <ul className="country-details">
        <li>
          Today Cases:
          {detail.todayCases}
        </li>
        <li>
          Total Cases:
          {detail.cases}
        </li>
        <li>
          Today Deaths:
          {detail.todayDeaths}
        </li>
        <li>
          Total Deaths:
          {detail.deaths}
        </li>
        <li>
          Country Population:
          {detail.population}
        </li>
      </ul>
    </div>
  );
};

export default Details;
