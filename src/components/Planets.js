import React from 'react';
import { NavLink } from 'react-router-dom';

const Planets = () => {
  return (
    <div>
      Planets
      <NavLink to="/characters">characters</NavLink>
    </div>
  );
};

export default Planets;
