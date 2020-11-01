import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

const PlanetCard = ({ name, climate, population, link }) => {
  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`climate: ${climate}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`population: ${population}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained">
            <Link
              to={{
                pathname: `/planet/${name}`,
                state: { link: link },
              }}>
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PlanetCard;
