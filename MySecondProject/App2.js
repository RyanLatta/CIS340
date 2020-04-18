import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  function getFullName(fName,mName,lName) {
    return fName + " " + mName + " " + lName;
  }

  const pet = "tarantula";

  return (
      <Text>
        {"\n\n\n\n\n"}
        I'm a CIS340 student. {"\n"}
        My full name is {getFullName("Ryan","William","Latta")}. {"\n"}
        I want a {pet}. {"\n"}
        
      </Text>
    
  );
}

