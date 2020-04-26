import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {uri: 'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
    width: 300, height: 300};

    //can make dog an outside function variable
    //can make the function = to a variable returned from the component (that's what the = () => ) - may require restart
    
export default MyScrollViewApp = () => (
    <ScrollView>
      <Text style= {{fontSize:20, padding: 20}}>
        {"\n"}
        Try to scroll down!
      </Text>

    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />

      <Text style= {{fontSize:20, padding: 20}}>
        Try to scroll up!
      </Text>

    </ScrollView>
  );

