import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Planet = props => {
  const [planet, setPlanet] = useState(null);
  //let residents = [];
  const [residents, setResidents] = useState([]);
  // remove
  window.planet = planet;

  const link = useLocation().state.link || 'http://swapi.dev/api/planets/1/';
  window.location123 = link;
  //const link = 'http://swapi.dev/api/planets/1/';

  const func = async temp => {
    let resu = Promise.all(
      temp.map(r => {
        return axios.get(r);
      }),
    );
    return resu;
  };

  useEffect(async () => {
    let residentsLinks = await fetch(link)
      .then(response => response.json())
      .then(res => {
        setPlanet(res);
        return res.residents;
      });
    setResidents(
      await Promise.all(
        residentsLinks.map(link => {
          return fetch(link).then(response => response.json());
        }),
      ),
    );
  }, []);

  window.residents = residents;

  return (
    <div>
      <span>{planet && planet.name}</span>
      <span>
        {residents &&
          residents.map((resident, i) => {
            return <p>{resident.name}</p>;
          })}
      </span>
    </div>
  );
};

export default Planet;
