import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './templates/Header/Header';
import Footer from './templates/Footer/Footer';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Favorites path="/favorites" exact component={Favorites} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
