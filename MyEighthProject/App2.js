import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class myApp extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  onTap = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {count} = this.state;

    return (
      <View style={styles.container}>
        
        <View style= {styles.counterText}>
          <Text> Tap counter: {count} </Text>

        </View>
        
        <TouchableOpacity style = {styles.button} onPress = {this.onTap}>
          <Text>Touch me!</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
//onPress = {onTap} calls the onTap method
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
