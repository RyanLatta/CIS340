import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
      
      <View style= {styles.counterText}>
        <Text> Tap counter: {count} </Text>

      </View>
      
      <TouchableOpacity style = {styles.button} onPress = {onTap}>
        <Text>Touch me!</Text>
      </TouchableOpacity>

    </View>
  );
}
//onPress = {onTap} calls the onTap method
//colors chooser is at https://www.w3schools.com/cssref/css_colors.asp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#B0C4DE'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#778899',
    padding: 15
  },

  counterText: {
    alignItems: 'center',
    padding:15
  }
});
