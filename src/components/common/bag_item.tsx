import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {X_icon} from '../../assets/icon/x';
import API from '../../utils/api';

export const Bag_item = ({el}: any) => {
  // const DeleteDoc = async () => {
  //   API.put(`shop/bag/delete/${el.uuid}`)
  // }
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
        <Image
          style={{width: 96, height: 96, borderRadius: 6}}
          source={{uri: el.image}}
        />
        <View
          style={{
            marginLeft: 16,
            marginRight: 100,
            height: 50,
            justifyContent: 'space-between',
          }}>
          <Text style={styled.bigText}>{el.title}</Text>
          <Text style={styled.text}>${el.price} / spruce</Text>
        </View>
        <Pressable >
          <X_icon />
        </Pressable>
      </View>
      <View
        style={{
          width: 350,
          height: 1,
          backgroundColor: '#2D2A2B',
          opacity: 0.1,
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  bigText: {
    width: 110,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#2D2A2B',
  },
  text: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 20,
    color: '#2D2A2B',
  },
});
