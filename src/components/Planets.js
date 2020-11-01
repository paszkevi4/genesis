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
      <Grid container spacing={1}>
        {planets?.map(planet => {
          return (
            // <Link
            //   key={planet.name}
            //   to={{
            //     pathname: `/planet/${planet.name}`,
            //     state: { link: planet.url },
            //   }}>
            <PlanetCard
              name={planet.name}
              climate={planet.climate}
              population={planet.population}
              link={planet.url}
            />
            //<p>{planet.name}</p>
            //<p>{planet.climate}</p>
            //<p>{planet.population}</p>
            // </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default Planets;
