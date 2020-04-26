import React from 'react';
import { Text, View, SectionList } from 'react-native';

//flex: dynamic width and height, makes it x number of components
//one set of {} means you're using values of list?
//using [] is like an array

//the list below has sections of items, and sets the title of the section and all the elements in it. Returning the element itself

  export default StatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop:22}}>
        <SectionList
          sections={[
            {title: 'A', data: ['Alabama', 'Alaksa', 'Arizona', 'Arkansas']},
            {title: 'C', data: ['California', 'Colorado', 'Connecticut']}, 
            {title: 'D', data: ['Deleware']}
          ]}

          renderItem={({item}) => <Text style={{padding:10, fontSize:20}}> {item} </Text>}
          
          renderSectionHeader={({sections}) => 
            <Text style= {{paddingTop:10, paddingRight:5, paddingLeft:5, paddingBottom:10, 
            fontSize:20, fontWeight:'bold', backgroundColor:'#9FA8DA'}}>
            </Text>}

          keyExtractor={(item, index) => index}
      />
      

      </View>
 
    
    );
  }
