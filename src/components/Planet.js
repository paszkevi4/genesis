import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Planet = props => {
  const location = useLocation();
  const link = 'http://swapi.dev/api/planets/1/';
  axios.get(link).then(res => console.log(res.data));

  return <div>Planet</div>;
};

export default Planet;
