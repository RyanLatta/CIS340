import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View >
      <View style = {{width:50, height:50, backgroundColor:'blue'}} />
      <View style = {{width:100, height:100, backgroundColor:'black'}} />
      <View style = {{width:100, height:100, backgroundColor:'red'}} />
    </View>
    //this makes components render at the same size NO MATTER THE DEVICE they're rendered on - bad :(
  );
}

