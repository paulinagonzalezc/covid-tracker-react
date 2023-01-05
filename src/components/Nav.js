import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Nav = () => (
  <div>
    <div className="nav-bar">
      <NavLink to="/" className="home-link"><HomeIcon /></NavLink>
      <div className="nav-title">Covid Stats</div>
      <SettingsIcon className="settings-icon" />
    </div>
  </div>
);

export default Nav;
