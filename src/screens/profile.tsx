import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LogOut_icon} from '../assets/icon/log_out';

export const ProfileScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView>
      <View
        style={{
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 168, height: 25}}
          source={require('../assets/image/header_logo.png')}
        />
      </View>
      <View
        style={{
          width: windowWidth,
          height: 1,
          backgroundColor: '#2D2A2B',
          opacity: 0.1,
          marginTop: 20,
          marginBottom: 42,
        }}
      />
      <View
        style={{
          width: windowWidth,
          height: 200,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 64, height: 64, borderRadius: 50}}
            source={require('../assets/image/photo.png')}
          />
          <Text style={styled.text}>phone number</Text>
        </View>
        <Pressable style={styled.logOut}>
          <View
            style={{
              width: 100,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <LogOut_icon />
            <Text style={styled.text}>Log out</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000000',
  },
  logOut: {
    width: 343,
    height: 56,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
