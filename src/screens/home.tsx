import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/common/header';
import {Pick_up_store} from '../components/common/pick_up_store';
import {Sections_row} from '../components/common/section_row';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <Pick_up_store />
      <Image
        source={require('../assets/image/photo.png')}
        style={{width: 343, height: 204, marginLeft: 16, marginTop: 14}}
      />
      <View style={{flexDirection: "column"}}>
        <Text
          style={styled.text}>
          Your favourite
        </Text>
        <Sections_row navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#2D2A2B',
    lineHeight: 20,
    fontWeight: '500',
    marginTop: 33,
    marginLeft: 16,
  },
});
