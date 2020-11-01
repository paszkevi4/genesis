import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RenderIf from './RenderIf';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const Planet = () => {
  const [planet, setPlanet] = useState(null);
  const [residents, setResidents] = useState(null);

  const link = useLocation().state.link || 'http://swapi.dev/api/planets/1/';

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, [link]);

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
                <p>{`Rotation period: ${planet?.rotation_period}`}</p>
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
                return <p key={resident.name}>{resident.name}</p>;
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
