import React, {Component, useState} from 'react';
import { Text, TextInput, View } from 'react-native';

export default function WordConvertor() {
  
  const [text, setText]=useState('');
  //onChangeText makes sure every time you update the text, you call the function
  //text.split splits the input by whatever, replaces it with a * and joins it back together in a sort of output
  return (
    <View style={{padding: 40}}>
      <TextInput style = 
      {{height: 40}} 
      placeholder="Input Text Here" 
      onChangeText={text => setText(text)}
      defaultValue={text}
      />

      <Text style={{padding: 10, fontSize:42}}>
        {text.split(' ').map((word) => word && '*').join(' ')}
      </Text>

    </View>
  );

}
