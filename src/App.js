import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Show from './components/Show';
import Episode from './components/Episode';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/show/:show_id/:show_name" exact component={Show} />
            <Route path="/show/:show_id/:show_name/:episode_id" component={Episode} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
