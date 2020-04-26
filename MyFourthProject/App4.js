import React from 'react';
import { Text, View, FlatList } from 'react-native';

//flex: dynamic width and height, makes it x number of components
//one set of {} means you're using values of list?
//using [] is like an array

//the list below has items, and setting all the keys and returning that key for each item

  export default StatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop:22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {key: 'Alaska'},
            {key: 'Arizona'},
            {key: 'Arkansas'},
            {key: 'California'},
            {key: 'Colorado'},
            {key: 'Connecticut'},
            {key: 'Deleware'},
            {key: 'Florida'},
            {key: 'Georgia'},
            {key: 'Hawaii'},
            {key: 'Idaho'},
            {key: 'Illinois'},
            {key: 'Indiana'},
            {key: 'Iowa'},
            {key: 'Kansas'},
            {key: 'Kentucky'},
            {key: 'Louisiana'},
            {key: 'Maine'},
            {key: 'Maryland'},
            {key: 'Massachusetts'},
            {key: 'Michigan'}
          ]}

          renderItem={({item}) => <Text style={{padding:10, fontSize:20}}> {item.key} </Text>}
      />
      

      </View>
 
    
    );
  }
