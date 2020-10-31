import './app.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Planets from './components/Planets';
import Characters from './components/Character';

function App() {
  return (
    <div className="App">
      app
      <Router>
        <Route path="/planets" render={() => <Planets />} />
        <Route path="/characters/:id?" render={() => <Characters />} />
      </Router>
    </div>
  );
}

export default App;
