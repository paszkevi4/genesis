import './app.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Planets from './components/Planets';
import Planet from './components/Planet';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link className="header-link" to="/">
              <Typography variant="h6">Home</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Route path="/planets" render={() => <Planets />} />
        <Route path="/planet/:id?" render={() => <Planet />} />
        <Route exact path="/">
          <Redirect to="/planets" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
