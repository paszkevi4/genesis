import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlanets } from '../api/api';

import LinearProgress from '@material-ui/core/LinearProgress';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  // delete
  window.planets = planets;
  useEffect(() => {
    getPlanets().then(response => setPlanets(response.results));
  }, []);
  return (
    <div>
      {planets ? (
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
        })
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
};

export default Planets;
