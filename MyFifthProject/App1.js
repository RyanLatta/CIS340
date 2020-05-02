import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.largeText}>YOLO</Text>
      <Text style ={styles.normalText}>Still gonna send it</Text>
      <Text style ={[styles.largeText, styles.normalText]}>This is the third line to test style array</Text>
      <Text style ={[styles.largeText, styles.normalText]}>color/size are overrid by the second style, bold isn't</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },

  largeText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  },

  normalText: {
    color: 'blue',
    fontSize: 15
  }

});
