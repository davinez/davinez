import './styles/App.css';
import { Nav } from './components/Nav';
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { About } from './views/About';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
