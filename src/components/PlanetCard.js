import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PlanetCard = ({ name, climate, population, link }) => {
  return (
    <Card variant="outlined">
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
  );
};

export default PlanetCard;
