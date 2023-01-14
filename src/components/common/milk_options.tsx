import React, {useContext, useState} from 'react';
import {StyleSheet, Text, Dimensions, View, Pressable} from 'react-native';
import {X_icon} from '../../assets/icon/x';
import {DataContext} from '../../context/DataContext';

const windowWidth = Dimensions.get('window').width;

const Option = ({title, standart, setIsVisible}: {title: string; standart: boolean, setIsVisible: any}) => {
  const {setOptions, options} = useContext(DataContext);

  return (
    <Pressable onPress={() => setOptions({...options, milk : title}, setIsVisible(false))}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styled.title}>{title}</Text>
          {standart && (
            <View
              style={{
                width: 74,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                borderColor: '#D3A762',
                borderWidth: 1,
                marginLeft: 25,
              }}>
              <Text style={styled.standart}>STANDART</Text>
            </View>
          )}
        </View>
        <View
          style={{
            width: windowWidth - 48,
            height: 1,
            backgroundColor: '#969495',
            opacity: 0.2,
            marginTop: 16,
            marginBottom: 16,
            marginLeft: 24,
          }}
        />
      </View>
    </Pressable>
  );
};

export const Milk_options = ({isVisible, setIsVisible}: boolean) => {
  const title = [
    {
      name : "2% Milk",
      boolean: true
    },
    {
      name : "Almond",
      boolean: false
    },
    {
      name : "Breve (Half & Half)",
      boolean: false
    },
    {
      name : "Coconut",
      boolean: false
    },
    {
      name : "Heavy Cream",
      boolean: false
    },
  ]

  return (
    <View
      style={{
        width: windowWidth,
        height: 500,
        flexDirection: 'column',
        marginBottom: 20,
        display: isVisible ? "flex" : "none"
      }}>
      <View
        style={{
          width: windowWidth - 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styled.little_header}>Milk</Text>
        <Pressable onPress={() => setIsVisible(false)}>
          <X_icon style={{marginTop: 20}} />
        </Pressable>
      </View>
      <View
        style={{
          width: windowWidth - 48,
          height: 1.5,
          backgroundColor: '#D3A762',
          opacity: 0.2,
          marginTop: 16,
          marginBottom: 21,
          marginLeft: 24,
        }}
      />
      {title.map((el, index) => {
        return <Option key={index} title={el.name} standart={el.boolean} setIsVisible={setIsVisible}/>;
      })}
    </View>
  );
};

const styled = StyleSheet.create({
  little_header: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.0038,
    color: '#2D2A2B',
    marginLeft: 24,
    marginTop: 21,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.0025,
    color: '#2D2A2B',
    marginLeft: 24,
  },
  switched_title: {
    color: '#D3A762',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.0025,
    marginLeft: 24,
  },
  standart: {
    fontWeight: '500',
    fontSize: 10,
    letterSpacing: 0.005,
    color: '#D3A762',
  },
});
