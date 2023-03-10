import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import {Size12} from '../assets/icon/size12';
import {Size16} from '../assets/icon/size16';
import {Size20} from '../assets/icon/size20';
import {Size24} from '../assets/icon/size24';
import {Size8} from '../assets/icon/size8';
import {White_Bag} from '../assets/icon/white_bag';
import {White_left_arrow} from '../assets/icon/white_left_arrow';
import {Detail_options} from '../components/common/detail_options';
import {Milk_options} from '../components/common/milk_options';
import {DataContext} from '../context/DataContext';
import API from '../utils/api';
import uuid from 'react-native-uuid';

export const Detail = ({navigation, route}: any) => {
  const windowWidth = Dimensions.get('window').width;
  const [isVisible, setIsVisible] = useState(false);
  const [spec, setSpec] = useState<any | null>(null);
  const sections = [
    ['Small', <Size8 style={{marginTop: 12}} />],
    ['Sprunce', <Size12 />],
    ['Ceder', <Size16 />],
    ['Redwood', <Size20 />],
    ['Giant', <Size24 />],
  ];
  const {options, setOptions} = useContext(DataContext);
  const {image, id} = route.params;
  const [totalItems, setTotalItems] = useState<any>();

  useEffect(() => {
    API.get(`data/${id}`).then(res => {
      setSpec(res.data.spec);
    });
    API.get('shop/bag').then(res => {
      setTotalItems(res.data.bagDatas.totalItems);
    });
  }, [id]);

  const addBag = async () => {
    await API.put('shop/bag/coffees', {
      ...spec,
      size: sections[options.size][0],
      milk: options.milk,
      uuid: uuid.v4().slice(0 , 7)
    });
  };

  return (
    <ScrollView style={{flexDirection: 'column'}}>
      <ImageBackground
        style={{
          width: windowWidth,
          height: 344,
          opacity: isVisible === true ? 0.5 : 1,
        }}
        source={{uri: image}}>
        <SafeAreaView>
          <View
            style={{
              width: windowWidth,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Pressable
              style={styled.button}
              onPress={() => navigation.navigate('Home')}>
              <White_left_arrow />
            </Pressable>
            <Pressable
              style={styled.bag}
              onPress={() => navigation.navigate('Bag')}>
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
              <White_Bag style={{position: 'absolute'}} />
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={{display: isVisible ? 'none' : 'flex'}}>
        <View
          style={{
            marginLeft: 16,
            marginRight: 16,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styled.size_options}>Size options</Text>
          <View
            style={{
              width: windowWidth - 32,
              height: 1.5,
              backgroundColor: '#D3A762',
              opacity: 0.2,
              marginTop: 16,
              marginBottom: 24,
            }}
          />
          <View
            style={{
              width: windowWidth - 32,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {sections.map((el, index) => {
              return (
                <View
                  key={index}
                  style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Pressable
                    onPress={() => setOptions({...options, size: index})}
                    style={
                      options.size === index
                        ? styled.cover_button
                        : styled.normal_button
                    }>
                    {sections[index][1]}
                  </Pressable>
                  <Text
                    style={
                      options.size === index
                        ? styled.cover_button.text
                        : styled.normal_button.text
                    }>
                    {el[0]}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={styled.little_header}>Flavor changes</Text>
          <View
            style={{
              width: windowWidth - 32,
              height: 1.5,
              backgroundColor: '#D3A762',
              opacity: 0.2,
              marginTop: 16,
              marginBottom: 20,
            }}
          />
          <Detail_options setIsVisible={setIsVisible} />
          <Text style={styled.little_header}>Flavor changes</Text>
          <View
            style={{
              width: windowWidth - 32,
              height: 1.5,
              backgroundColor: '#D3A762',
              opacity: 0.2,
              marginTop: 16,
              marginBottom: 24,
            }}
          />
          <Text style={styled.calor}>530 calories, 67g sugar, 21g fat</Text>
        </View>
        <View
          style={{
            width: windowWidth,
            height: 93,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPressOut={() => navigation.navigate('Home')}
            style={styled.add_bag}
            onPress={() => {
              addBag(), setOptions({...options, milk: 'Standart', size: 1});
            }}>
            <Text style={styled.add_bag.text}>Add To Bag</Text>
          </Pressable>
        </View>
      </View>
      <Milk_options setIsVisible={setIsVisible} isVisible={isVisible} />
    </ScrollView>
  );
};

const styled = StyleSheet.create({
  add_bag: {
    width: 343,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#D3A762',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    text: {
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 0.005,
      color: '#ffffff',
    },
  },
  calor: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.0025,
    color: '#969495',
    marginBottom: 24,
  },
  little_header: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.0038,
    color: '#2D2A2B',
    marginTop: 48,
  },
  normal_button: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    text: {
      fontWeight: '300',
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 15,
      color: '#969495',
      textAlign: 'center',
      marginTop: 8,
    },
  },
  cover_button: {
    height: 64,
    width: 64,
    backgroundColor: 'rgba(211, 167, 98, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D3A762',
    borderRadius: 50,
    text: {
      fontWeight: '500',
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 15,
      color: '#2D2A2B',
      textAlign: 'center',
      marginTop: 8,
    },
  },
  button: {
    marginLeft: 16,
    marginTop: 16,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bag: {
    marginRight: 16,
    marginTop: 16,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size_options: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.0038,
    color: '#2D2A2B',
    marginTop: 17,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#D3A762',
    position: 'relative',
    bottom: 15,
    right: 15,
    zIndex: 1,
  },
});
