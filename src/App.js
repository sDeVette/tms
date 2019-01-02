import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/Show';
import Episode from './components/Episode';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>{/* Using a switch so only one route will be able to show */}
            <Route path="/" exact component={Home} />
            <Route path="/show/:show_id/:show_name" exact component={Show} />
            <Route path="/show/:show_id/:show_name/:episode_id" component={Episode} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
