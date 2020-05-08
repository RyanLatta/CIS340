import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  let openShareDia = async () => {
    if(!(await Sharing.isAvailableAsync())) {
      alert('Sharing is not available');
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  if(selectedImage !== null) {
    return(
      <View style = {styles.container}>
        <Image source = {{uri: selectedImage.localUri}} style = {styles.logo}/>

        <TouchableOpacity onPress={openShareDia} style = {styles.button}>
          <Text style = {styles.buttonText}>Share photo</Text>
        </TouchableOpacity>

      </View>
    )
  }
//end of imagePicker code

  return (
    <View style={styles.container}>
      
      <Image source = {{uri: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Bulldog_02.jpg'}}
      style = {styles.logo}/>

      <Text style = {styles.instructs}>
        Press the button \/ to select a phone image:
      </Text>
      
      <TouchableOpacity style = {styles.button} onPress ={openImagePickerAsync}>
        <Text style = {styles.buttonText}>
          Pick image
        </Text>
      </TouchableOpacity>

    </View>
  );
}
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
    padding: 15,
    borderRadius: 2
  },

  instructs: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10
  },

  logo: {
    width: 300, height: 300,
    marginBottom: 20,
    alignSelf: 'center'
  },

  buttonText: {
    fontSize: 15, color: 'white'
  }
});
