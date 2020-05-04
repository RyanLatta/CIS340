import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  
  onPressButton() {
    alert('You poked a button. Good job, Skippy.')
  }
  
  render () {
    return (
      <View style={styles.container}>
        
        <View style = {styles.buttonContainer}>
          <Button
            onPress = {this.onPressButton} 
            title="Press me (1)"
          />
        </View>

        <View style = {styles.layoutContainer}>
          <Button
              onPress = {this.onPressButton}
              title="Press me (2)"
              color = 'red'
            />

          <Button
           onPress = {this.onPressButton}
            title="Press me (3)"
            color = 'green'
          />

        </View>

        <View style = {styles.buttonContainer}>
          <Button
            onPress = {this.onPressButton}
            title="Press me (4)"
            color = 'black'
          />
        </View>

      </View>
    );
  }
}

//the onPress = {() => { function }} is how you embed code within a thing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  buttonContainer: {
    margin: 20
  },

  layoutContainer: {
    margin: 15, flexDirection: 'row', justifyContent: 'space-evenly'
  }
});
