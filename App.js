/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import { Button, ThemeProvider, Avatar, ListItem } from 'react-native-elements';

const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <ThemeProvider>
            <Button title="Hey!" />
          </ThemeProvider>

          <Avatar
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />
          <Avatar
            size="small"
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />
          <Avatar
            size="medium"
            overlayContainerStyle={{ backgroundColor: 'blue' }}
            icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 3, marginTop: 100 }}
          />
          <Avatar
            size="large"
            icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
            overlayContainerStyle={{ backgroundColor: 'white' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 4, marginTop: 75 }}
          />
          <Avatar
            size="xlarge"
            rounded
            icon={{ name: 'home', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 5, marginRight: 60 }}
          />
          <Avatar
            size={200}
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />

          <ListItem
            leftAvatar={{
              title: 'name[0]',
              source: { uri: 'ttps://via.placeholder.com/150' },
              showEditButton: true,
            }}
            title={'name'}
            subtitle={'role'}
            chevron
          />
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
