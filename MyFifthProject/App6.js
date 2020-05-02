import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:'center', marginTop:30, alignItems:'stretch'}}>
      <View style = {{height:100, backgroundColor:'blue'}} />
      <View style = {{width:100, height:100, backgroundColor:'black'}} />
      <View style = {{width:100, height:100, backgroundColor:'red'}} />
    </View>
    //this makes components to fill the screen
    //can align content based on other axis (doesn't work with row flex direction, some are overrid without a width defined)
  );
}

