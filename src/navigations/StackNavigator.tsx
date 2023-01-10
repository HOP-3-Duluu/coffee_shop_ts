import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BagScreen} from '../screens/bag';
import {BottomTabNavigation} from './RootNavigator';
import {Detail} from '../screens/detail';
import {PaymantScreen} from '../components/common/payment';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomBarNavigator"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bag"
          component={BagScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymantScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
