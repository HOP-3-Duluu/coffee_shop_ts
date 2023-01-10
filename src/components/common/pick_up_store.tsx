import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Right_arrow} from '../../assets/icon/right_arrow';

export const Pick_up_store = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View
    style={{width: windowWidth, height: 60, backgroundColor: "#2D2A2B", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
      <View style={{flexDirection: "column"}}>
        <Text style={styled.text1}>Pick-up store</Text>
        <Text style={styled.text2}>Barkley village * 0.5 mi</Text>
      </View>
      <View/>
      <View/>
      <Right_arrow />
    </View>
  );
};

const styled = StyleSheet.create({
  text1: {
    fontWeight: '400',
    fontSize: 10,
    letterSpacing: 0.0025,
    color: '#FFFFFF',
    opacity: 0.6,
  },
  text2: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.0025,
    color: '#FFFFFF',
  },
});
