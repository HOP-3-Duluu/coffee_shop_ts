import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Left_arrow} from '../../assets/icon/left_arrow';
import {Right_arrow_v2} from '../../assets/icon/right_arrow_v2';
import {Payment_successfully} from './payment_successfully';

const CardPaths: any = {
  visa: require('../../assets/image/visa.png'),
  debit: require('../../assets/image/debit.png'),
  cash: require('../../assets/image/money.png'),
  apple_pay: require('../../assets/image/apple_pay.png'),
};

const Card = ({
  type,
  index,
  setIsSuccess,
}: {
  type: string;
  index: number;
  setIsSuccess: any;
}) => {
  const card_options = {
    name: ['Credit card', 'Cash', 'Debit card', 'Apple Pay'],
    description: [
      'Credit card      **** **** 3306',
      'Pay at store when pick-up',
      'Matercard      ******** 3306 ',
      'loremipsum@icloud.com',
    ],
  };

  return (
    <Pressable style={styled.card} onPress={() => setIsSuccess(true)}>
      <Image
        style={{width: 42, height: type === 'visa' ? 13 : 35}}
        source={CardPaths[type]}
      />
      <View style={{flexDirection: 'column', marginRight: 76}}>
        <Text style={styled.text3}>{card_options.name[index]}</Text>
        <Text style={[styled.text3, {fontWeight: '300'}]}>
          {card_options.description[index]}
        </Text>
      </View>
      <Right_arrow_v2 style={{marginRight: 16}} />
    </Pressable>
  );
};

export const PaymantScreen = ({navigation}: {navigation: any}) => {
  const windowWidth = Dimensions.get('window').width;
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  if (isSuccess === true) {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }
  return isSuccess === true ? (
    <Payment_successfully />
  ) : (
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
        <Text style={styled.text}>Payment</Text>
        <View style={{marginRight: 40}} />
      </View>
      <View
        style={{
          width: windowWidth,
          height: 1,
          backgroundColor: '#2D2A2B',
          opacity: 0.1,
          marginTop: 16,
          marginBottom: 26,
        }}
      />
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={[styled.text, {marginBottom: 16}]}>Credit card</Text>
        <Card setIsSuccess={setIsSuccess} type="visa" index={0} />
        <Card setIsSuccess={setIsSuccess} type="debit" index={2} />
        <Pressable style={styled.button}>
          <Text>Add new card</Text>
        </Pressable>
        <Text style={[styled.text, {marginBottom: 24, marginTop: 16}]}>
          Other methods
        </Text>
        <Card setIsSuccess={setIsSuccess} type="cash" index={1} />
        <Card setIsSuccess={setIsSuccess} type="apple_pay" index={3} />
      </View>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  card: {
    width: 343,
    height: 56,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 4,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text3: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: '#2D2A2B',
  },
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
  button: {
    borderColor: '#D3A762',
    borderWidth: 1,
    borderRadius: 2,
    width: 343,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
