import React, { Component } from 'react';
import {
  Switch,
  Route } from 'react-router';
import { NativeRouter } from 'react-router-native';

import Main from '../containers/Main';
import Web from './Web';

class App extends Component {
  
  render () {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/:id/:title' component={Web}/>
        </Switch>
      </NativeRouter>
    );
  }
}

export default App;
