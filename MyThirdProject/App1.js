import React from 'react';
import {Text, View, TextInput} from 'react-native';

function Student(props) {//props is a properties (arguments to make components), called later in {props.name}
  return (
    <View>
      <Text>My name is {props.name}, a student in CIS340</Text>
    </View>
  );
}

export default function MultiComp(){ //can only have one export function?
  return(
    <View style={{
      flex: 1, //divides area into x rectangles
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome to CIS340
      </Text>
        <Student name = "Ryan"/>
        <Student name = "Bob"/>
        <Student name = "Jerry"/>
        <Student name = "Bill"/>

    </View>
  );

}
