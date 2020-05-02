import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style = {{flex:1, backgroundColor:'blue'}} />
      <View style = {{flex:2, backgroundColor:'black'}} />
      <View style = {{flex:3, backgroundColor:'red'}} />
    </View>
    //this makes components to fill the screen - flex:1 on the parents does whole screen 
    //*need to have some size to the parent* 
    //subcomponents are ranked by number (1 smallest)
    //adding a width overrides the flex width
  );
}

