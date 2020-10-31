import './app.css';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Planets from './components/Planets';
import Planet from './components/Planet';
import Characters from './components/Character';

function App() {
  return (
    <div className="App">
      app
      <Router>
        <Route path="/planets" render={() => <Planets />} />
        <Route path="/planet/:id?" render={() => <Planet />} />
        <Route path="/characters/:id?" render={() => <Characters />} />
        <Route exact path="/">
          <Redirect to="/planets" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
