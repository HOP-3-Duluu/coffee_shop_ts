import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Left_arrow} from '../assets/icon/left_arrow';
import {Bag_item} from '../components/common/bag_item';
import {DataContext} from '../context/DataContext';
import API from '../utils/api';

export const BagScreen = ({navigation}: any) => {
  const windowWidth = Dimensions.get('window').width;
  const {idBag} = useContext(DataContext);
  const [coffee_data, setCoffee_data] = useState<any>();

  useEffect(() => {
    API.get('shop/bag').then(res => {
      setCoffee_data(res.data.bagDatas);
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          width: windowWidth,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Pressable style={{marginLeft: 10}} onPress={() => navigation.goBack()}>
          <Left_arrow />
        </Pressable>
        <Text style={styled.text}>My bag</Text>
        <View style={{marginRight: 40}} />
      </View>
      <View
        style={{
          width: windowWidth,
          height: 1,
          backgroundColor: '#2D2A2B',
          opacity: 0.1,
          marginTop: 16,
          marginBottom: 23,
        }}
      />
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={styled.text}>Order items ({coffee_data?.totalItems})</Text>
        <ScrollView style={{height: 480}}>
          {coffee_data?.coffees.map((el: any, index: number) => {
            return <Bag_item el={el} key={index} />;
          })}
        </ScrollView>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styled.text2}>Subtotal</Text>
          <Text style={styled.text2}>$ {coffee_data?.total}</Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styled.text2}>Tax & Fees</Text>
          <Text style={styled.text2}>$0.55</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styled.text}>Total</Text>
          <Text style={styled.text}>$ {coffee_data?.total + 0.55}</Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: windowWidth,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          style={styled.button}
          onPress={() =>
            coffee_data?.coffees.length === 0
              ? navigation.navigate('Home')
              : navigation.navigate('Payment')
          }>
          <Text style={styled.text3}>
            Check Out ${coffee_data?.total + 0.55}
          </Text>
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
    color: '#2D2A2B',
  },
  text2: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 20,
    color: '#2D2A2B',
  },
  text3: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff',
    letterSpacing: 0.005,
    textTransform: 'capitalize',
  },
  button: {
    width: 343,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#D3A762',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
