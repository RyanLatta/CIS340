import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class MyApp extends Component {
  //making this a class instead of a function needs to be reconnected. class needs only {}, while a function needs ()and {} after it
  render() {
  return (
    <View style={{padding: 60}}>
      <Text>Hello, World!</Text>
      <Text>Look Ma, no hands!</Text>
    </View>
  );
}
}
