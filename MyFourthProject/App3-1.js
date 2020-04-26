import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewApp() {
  
  const dog = {uri: 'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
    width: 300, height: 300};

    //can put padding in the scrollview component
  
  return (
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

}
