import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from './config/navigator'
import { ThemeProvider, Button } from 'react-native-elements';
import { theme } from './config/theme'




export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      </ThemeProvider>
    );
  }
}
