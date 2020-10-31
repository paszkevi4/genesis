import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlanets } from '../api/api';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  // delete
  window.planets = planets;
  useEffect(() => {
    getPlanets().then(response => setPlanets(response.results));
  }, []);
  return (
    <div>
      Planets
      {planets &&
        planets.map(planet => {
          return (
            <Link
              key={planet.name}
              to={{
                pathname: `/planet/${planet.name}`,
                state: { link: planet.url },
              }}>
              <p>{planet.name}</p>
              <p>{planet.climate}</p>
              <p>{planet.population}</p>
            </Link>
          );
        })}
      <NavLink to="/characters">characters</NavLink>
    </div>
  );
};

export default Planets;
