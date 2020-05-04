import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  
  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg",
  }
  
  return (
    <View style={styles.container}>
     
      <ImageBackground style = {styles.image} source = {csuLogo}>

        <Text style = {styles.text}> CSU LOGO</Text>

      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:30, flex:1, flexDirection:'row'
  },

  image: {
    flex:1, resizeMode: 'cover', justifyContent: 'center', opacity: .50
  },

  text: {
    color: 'green', fontSize:40, fontWeight: 'bold', alignSelf: 'center'
  },

  
  //resizeMode changes the aspect ratio to fit the box you give it - stretch, cover, etc.
});
