import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';

export const Sections_row = ({navigation: {navigate}}: {navigation: any}) => {
  const [coffee_data, setCoffee_data] = useState<any>([]);
  axios.get('http://localhost:3030/data').then(response => {
    setCoffee_data(response.data.data);
  });
  return (
    <View style={{marginLeft: 16}}>
      <ScrollView horizontal={true}>
        {coffee_data.map((el: any, index: number) => {
          return (
            <Pressable
              key={index}
              onPress={() =>
                navigate('Detail', {image: el?.image, id: el?.id})
              }>
              <View style={{flexDirection: 'column'}}>
                <Image style={styled.image} source={{uri: el.image}} />
                <Text style={styled.title}>{el.title}</Text>
                <Text style={styled.price}>$ {el.price} / spruce</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styled = StyleSheet.create({
  image: {
    width: 159,
    height: 183,
    marginRight: 12,
    marginTop: 15,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#2D2A2B',
    marginTop: 12,
  },
  price: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 20,
    color: '#2D2A2B',
    marginTop: 5,
  },
});
