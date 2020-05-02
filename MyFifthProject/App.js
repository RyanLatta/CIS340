import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:'center', marginTop:30, alignItems:'stretch'}}>
      <View style = {{height:100, backgroundColor:'blue'}} />
      <View style = {{width:100, height:100, backgroundColor:'black', alignSelf:'center'}} />
      <View style = {{width:100, height:100, backgroundColor:'red'}} />
    </View>
    //this makes components to fill the screen
    //can use alignSelf to align only the container itself - not the children container in it (overrides parent alignment)
    //or other containers in the same level
    //stretch is good on alignItems
  );
}

