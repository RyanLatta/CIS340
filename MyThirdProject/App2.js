import React from 'react';
import {Text, View, Image} from 'react-native';

export default function MyDog() {//imported image thing above ^
  let pic = {uri: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"}; //uri for a picture url

  return (
    <View style={{
      flex: 1, //divides area into x rectangles
      justifyContent: 'center',
      alignItems: 'center'}}>

      <Image source={pic}
        style={{width: 200, height: 200}}/>

      <Text>Hello, this is my dog.</Text>

    </View>
  );
}

