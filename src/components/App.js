import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Favorites from './Favorites/Favorites';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Favorites path="/favorites" exact component={Favorites} />
        </Switch>
      </Router>
    );
  }
}

export default App;
