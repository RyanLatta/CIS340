import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  
  const csuLogo = {
    uri: "https://www.clipartkey.com/mpngs/m/6-65644_colorado-state-university-csu-logo.png",
  }
  
  return (
    <View style={styles.container}>
      <Image 
        style = {styles.localCSULogo}
        source={require('./assets/logo.jpeg')}
      />

      <Image 
        style = {styles.urlCSULogo}
        source={{uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"}}
      />

      <Image style = {styles.stretchStyle} source = {csuLogo}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:30,
  },

  localCSULogo: {
    width:100, height:100
  },

  urlCSULogo: {
    width:130, height:130
  },

  stretchStyle: {
    height:150, resizeMode: 'stretch'
  }
  //resizeMode changes the aspect ratio to fit the box you give it - stretch, cover, etc.
});
