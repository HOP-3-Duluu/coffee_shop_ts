import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {Order_item} from '../components/common/order_item';

export const OrderScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const [number, setNumber] = useState(0);
  const sections = ['Processing', 'Success', 'Canceled'];

  return (
    <SafeAreaView
      style={{
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: windowWidth,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={styles.text}>My Orders</Text>
      </View>
      <View style={[styles.screenContainer, {width: windowWidth}]}>
        <ScrollView horizontal={true}>
          {sections.map((el, index) => {
            return (
              <Pressable
                key={index}
                style={[
                  number === index ? styles.selected_box : styles.box,
                  {width: windowWidth / 3},
                ]}
                onPress={() => {
                  setNumber(index);
                }}>
                <Text
                  style={
                    number === index
                      ? styles.selected_box.text
                      : styles.box.text
                  }>
                  {el}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      {number === 0 && (
        <ScrollView>
          <Order_item status="processing" />
        </ScrollView>
      )}
      {number === 1 && (
        <ScrollView>
          <Order_item status="success" />
        </ScrollView>
      )}
      {number === 2 && (
        <ScrollView>
          <Order_item status="cancelled" />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#2D2A2B',
  },
  selected_box: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D3A762',
    alignItems: 'center',
    text: {
      color: '#2D2A2B',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    text: {
      color: '#2D2A2B',
    },
  },
  screenContainer: {
    height: 44,
    flexDirection: 'row',
    display: 'flex',
    marginTop: 17,
    borderBottomColor: '0px 3px 4px rgba(0, 0, 0, 0.05)',
    marginBottom: 24,
  },
});
