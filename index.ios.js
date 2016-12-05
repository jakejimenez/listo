/**
 * Listo
 * Todo list application with anonymous authentication.
 * iOS
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Text } from '@shoutem/ui';

// Components
import AuthPass from './App/AuthPass.js';

import * as firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyCzhT-e34q7mJxs-ZVbWl-icJL-mOpx7Ow",
    authDomain: "listo-dd2a9.firebaseapp.com",
    databaseURL: "https://listo-dd2a9.firebaseio.com",
    storageBucket: "listo-dd2a9.appspot.com",
    messagingSenderId: "501349172897"
});

export default class listo extends Component {
  renderScene(route, navigator) {
  if (route.name == 'auth') {
    return <AuthPass navigator={navigator} />
  }
  if (route.name == 'home') {
    return <Home navigator={navigator} />
  }
}


render() {
    return (
      <Navigator initialRoute={{name: 'auth'}} renderScene={this.renderScene.bind(this)}/>
    );
  }
}

AppRegistry.registerComponent('listo', () => listo);
