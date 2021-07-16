import './styles/App.css';
import { Nav } from './components/Nav';
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { About } from './views/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
