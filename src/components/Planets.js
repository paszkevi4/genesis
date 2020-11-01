import { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [page, setPage] = useState(1);
  const [availablePages, setAvailablePages] = useState([false, false]);

  const changePage = (n = -1) => {
    setPage(page + n);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then(res => res.json())
      .then(res => {
        setAvailablePages([res.previous, res.next]);
        setPlanets(res.results);
      });
  }, [page]);

  return (
    <div>
      {!planets && <LinearProgress color="secondary" />}
      <ButtonGroup color="primary">
        <Button disabled={!availablePages[0]} onClick={() => changePage()}>
          Previous Page
        </Button>
        <Button disabled={!availablePages[1]} onClick={() => changePage(1)}>
          Next Page
        </Button>
      </ButtonGroup>
      <div className="main__grid">
        {planets?.map(planet => {
          return (
            <PlanetCard
              key={planet.name}
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
