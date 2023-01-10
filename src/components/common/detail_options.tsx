import React, {useContext, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Bottom_arrow} from '../../assets/icon/bottom_arrow';
import {DataContext} from '../../context/DataContext';

export const Detail_options = (navigation: any) => {
  const data = useContext(DataContext);
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={styled.little_header}>Milk</Text>
      <View style={styled.button}>
        {/* <Text style={styled.option_text}>{data?.milkOption}</Text> */}
        <Pressable onPress={() => data?.setClick(true)}>
          <Bottom_arrow style={{marginRight: 16}} />
        </Pressable>
      </View>

      <Text style={styled.little_header}>Shot</Text>
      <View style={styled.button}>
        <Text style={styled.option_text1}>4 shots</Text>
        <Pressable>
          <Bottom_arrow style={{marginRight: 16}} />
        </Pressable>
      </View>

      <Text style={styled.little_header}>Foam</Text>
      <View style={styled.button}>
        <Text style={styled.option_text}>Extra foam</Text>
        <Pressable>
          <Bottom_arrow style={{marginRight: 16}} />
        </Pressable>
      </View>

      <Text style={styled.little_header}>Whipping Cream</Text>
      <View style={styled.button}>
        <Text style={styled.option_text2}>No whip</Text>
        <Pressable>
          <Bottom_arrow style={{marginRight: 16}} />
        </Pressable>
      </View>
    </View>
  );
};

// #D3A762

const styled = StyleSheet.create({
  little_header: {
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.005,
    color: '#969495',
    marginBottom: 8,
  },
  button: {
    width: 343,
    height: 48,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  option_text: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.0025,
    color: '#2D2A2B',
    marginLeft: 16,
  },
  option_text1: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.0025,
    color: '#2D2A2B',
    marginLeft: 16,
  },
  option_text2: {
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.0025,
    color: '#2D2A2B',
    marginLeft: 16,
  },
});
