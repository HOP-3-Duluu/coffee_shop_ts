import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Bag_icon} from '../../assets/icon/bag';
import { DataContext } from '../../context/DataContext';
import API from '../../utils/api';

export const Header = ({navigation}: {navigation: any}) => {
  const [totalItems, setTotalItems] = useState<any>()
  const {options} = useContext(DataContext);

  useEffect(() => {
    API.get("shop/bag").then(res => {
      setTotalItems(res.data.bagDatas.totalItems)
    })
  }, [options, options?.milk, options?.size])

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
            zIndex: totalItems === 0 ? 1 : 0,
          }}>
          <Bag_icon />
        </View>
        <View
          style={[
            styled.badge,
            {
              backgroundColor:
                totalItems === 0 ? 'transparent' : '#D3A762',
              borderColor: totalItems === 0 ? 'transparent' : '#ffffff',
            },
          ]}>
          <Text
            style={{
              color: totalItems === 0 ? 'transparent' : '#ffffff',
              fontWeight: '600',
            }}>
            {totalItems}
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
    position: 'relative',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    bottom: 8,
    right: 10,
  },
});
