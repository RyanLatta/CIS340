import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:'row', marginTop: 30}}>
      <View style = {{flex:1, backgroundColor:'blue'}} />
      <View style = {{flex:2, backgroundColor:'black'}} />
      <View style = {{flex:3, backgroundColor:'red'}} />
    </View>
    //this makes components to fill the screen
    //flexDirection changes which way the things fill the screen (row, row-reverse, column, column-reverse)
  );
}

