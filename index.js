import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/components/App';

const store = configureStore();

const rnredux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent('codingChallenge_fpinon', () => rnredux);
