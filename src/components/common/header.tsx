import React, {useContext} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Bag_icon} from '../../assets/icon/bag';
import {DataContext} from '../../context/DataContext';

export const Header = ({navigation}: {navigation: any}) => {
  const data = useContext(DataContext);
  return (
    <View
      style={{
        marginLeft: 30,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View />
      <Image
        style={{width: 168, height: 25}}
        source={require('../../assets/image/header_logo.png')}
      />
      <Pressable
        style={{marginRight: 10}}
        onPress={() => navigation.navigate('Bag')}>
        <View
          style={{
            position: 'absolute',
            zIndex: data?.idBag.length === 0 ? 1 : 0,
          }}>
          <Bag_icon />
        </View>
        <View
          style={[
            styled.badge,
            {
              backgroundColor:
                data?.idBag.length === 0 ? 'transparent' : '#D3A762',
              borderColor: data?.idBag.length === 0 ? 'transparent' : '#ffffff',
            },
          ]}>
          <Text
            style={{
              color: data?.idBag.length === 0 ? 'transparent' : '#ffffff',
              fontWeight: '600',
            }}>
            {data?.idBag.length}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
const styled = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    position: 'relative',
    bottom: 8,
    right: 10,
  },
});
