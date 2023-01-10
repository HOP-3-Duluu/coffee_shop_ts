import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

export const Payment_successfully = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.screen, {width: windowWidth, height: windowHeight}]}>
      <View style={styles.box}>
        <Image
          style={{width: 78, height: 78}}
          source={require('../../assets/image/success.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background-color:rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});
