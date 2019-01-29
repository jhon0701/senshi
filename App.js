import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import AppNavigator from './AppNavigator';
import Login from './src/screens/login/login';


export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
    if (this.state.isLoggedIn)
      return <AppNavigator />
    else
      return <Login
        onLoginPress={() => this.setState({ isLoggedIn: true })}
      />;
  }
}
