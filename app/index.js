import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from './config/navigator'



export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}
