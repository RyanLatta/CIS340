import React from 'react';
import {Text, TextInput, View } from 'react-native';

function App() {
  return (
    <View>

      <Text>
      {"\n"} Running function App text
      </Text> 
      
    </View>
  );
}

export default function MultiComp() {
  return(
    <View style={{
      flex: 1, //divides area into x rectangles
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Text>
        App Start:
      </Text>
      
      <App/>
      <App/>
      <App/>

    </View>
  );

}
