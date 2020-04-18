import React from 'react';
import {Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>

      <Text>
        {"\n\n\n\n\n"}
        I'm a CIS340 student. {"\n"}
      </Text>

      <TextInput 
      style={{height: 40, borderColor: "green", borderWidth: 1}} //double{{}} is an object
      defaultValue="Enter Input:"
      >
      
      </TextInput> 
      
    </View>
  );
}

