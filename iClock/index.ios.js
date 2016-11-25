

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/App'
class iClock extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('iClock', () => iClock);
