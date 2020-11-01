import { useState, useEffect } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlanetCard from './PlanetCard';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [page, setPage] = useState(1);
  // delete
  window.planets = planets;
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then(res => res.json())
      .then(res => setPlanets(res.results));
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
