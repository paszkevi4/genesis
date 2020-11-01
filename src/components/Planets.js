import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlanets } from '../api/api';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlanetCard from './PlanetCard';

import Grid from '@material-ui/core/Grid';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  // delete
  window.planets = planets;
  useEffect(() => {
    getPlanets().then(response => setPlanets(response.results));
  }, []);
  return (
    <div>
      {!planets && <LinearProgress color="secondary" />}
      <div className="main__grid">
        {planets?.map(planet => {
          return (
            <PlanetCard
              name={planet.name}
              climate={planet.climate}
              population={planet.population}
              link={planet.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Planets;
