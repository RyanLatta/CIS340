import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginTop:30}}>
      <View style = {{width:100, height:100, backgroundColor:'blue'}} />
      <View style = {{width:100, height:100, backgroundColor:'black'}} />
      <View style = {{width:100, height:100, backgroundColor:'red'}} />
    </View>
    //this makes components to fill the screen
    //can justify content based on main axis (doesn't work with flex)
  );
}

