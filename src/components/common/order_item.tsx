import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const Order_item = ({status}: {status: string}) => {
  return (
    <View style={styles.box}>
      <View style={styles.column1}>
        <Text style={[styles.text_style4, {marginTop: 10}]}>Order #12</Text>
        <Text style={[styles.text_style3, {marginBottom: 20}]}>
          Quantity: <Text style={{color: '#2D2A2B'}}>1</Text>
        </Text>
        <Pressable style={[styles.detail_button, {marginBottom: 8}]}>
          <Text>Details</Text>
        </Pressable>
      </View>
      <View style={styles.column2}>
        <Text style={styles.text_style2}>05-20-2022</Text>
        <Text style={[styles.success_text_style, {color: '#2D2A2B'}]}>
          Total Amount : $10.56
        </Text>
        {status === 'processing' ? (
          <Text style={[styles.success_text_style, {color: '#2F80ED'}]}>
            Processing
          </Text>
        ) : status === 'success' ? (
          <Text style={[styles.success_text_style, {color: '#2AA952'}]}>
            Success
          </Text>
        ) : (
          <Text style={[styles.success_text_style, {color: '#F01F0E'}]}>
            Canceled
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 343,
    height: 120,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  detail_button: {
    width: 98,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D2A2B',
    borderRadius: 4,
  },
  success_text_style: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'right',
  },
  text_style2: {
    fontWeight: '300',
    fontSize: 16,
    textAlign: 'right',
    color: '#969495',
  },
  text_style3: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: '#969495',
  },
  text_style4: {
    fontWeight: '400',
    fontSize: 16,
    color: '#2D2A2B',
  },
});
