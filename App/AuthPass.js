import React, { Component } from 'react';
import { View } from 'react-native';
import { Title } from '@shoutem/ui';
import * as DeviceInfo from 'react-native-device-info';
import * as firebase from 'firebase';

export default class AuthPass extends Component {

  componentWillMount() {

  }

  render () {
    return (
      <Title>{DeviceInfo.getUniqueID()}</Title>
    )
  }
}
