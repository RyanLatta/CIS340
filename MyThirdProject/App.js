import React, { useState } from 'react';
import {Text, View, Button} from 'react-native';

function TV(props) {//imported useState above ^, state is maintaining data over time, also has Buttons now
  
  const [isOff, setIsOff] = useState(true);

return(
  <View>
    <Text>
    {"\n\n\n\n"}
      This is the {props.name} TV, and it is {isOff ? "OFF" : "ON"}
    </Text>

    <Button
      onPress={() => {
        setIsOff(false)
      }}
      disabled={!isOff}
      title={isOff ? "Turn on" : "Thanks!"}
    />
  
  </View>
  );//need ; after return function
}

//all text needs to go in a text component
//conditional statement with a ? means if the variable is true, displays OFF. If not, displays (after :) Turn me on
//same with the button title - if the TV is off ? it displays the title "Turn on" : if not, and TV is on, displays "Thanks!"

export default function MultiTVs(){ //can only have one export function?
  return(
    <View>
        <TV name = "LG"/>
        <TV name = "Samsung"/>
        <TV name = "Sanyo"/>
    </View>
  );
}