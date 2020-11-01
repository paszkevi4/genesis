import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RenderIf from './RenderIf';

import LinearProgress from '@material-ui/core/LinearProgress';

const Planet = props => {
  const [planet, setPlanet] = useState(null);
  //let residents = [];
  const [residents, setResidents] = useState(null);
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
    <>
      <RenderIf condition={residents}>
        <div className="planet__grid">
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`Short info about ${planet?.name}:`}
                </Typography>
                <p>{`Rotation period : ${planet?.rotation_period}`}</p>
                <p>{`Diameter: ${planet?.diameter}`}</p>
                <p>{`Climate: ${planet?.climate}`}</p>
                <p>{`Gravity: ${planet?.gravity}`}</p>
                <p>{`Terrain: ${planet?.terrain}`}</p>
                <p>{`Population: ${planet?.population}`}</p>
              </CardContent>
            </Card>
          </Grid>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {residents?.length
                  ? `Famous Residents of ${planet?.name}:`
                  : `There are not any famous residents of ${planet?.name}.`}
              </Typography>
              {residents?.map(resident => {
                return <p>{resident.name}</p>;
              })}
            </CardContent>
          </Card>
        </div>
      </RenderIf>
      <RenderIf condition={!residents}>
        <LinearProgress color="secondary" />
      </RenderIf>
    </>
  );
};

export default Planet;
