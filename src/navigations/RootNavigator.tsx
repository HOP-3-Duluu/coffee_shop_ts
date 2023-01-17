import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home';
import {OrderScreen} from '../screens/order';
import {ProfileScreen} from '../screens/profile';
import {ScanScreen} from '../screens/scan';
import {Home_icon} from '../assets/icon/home';
import {Scan_icon} from '../assets/icon/scan';
import {Order_icon} from '../assets/icon/order';
import {Profile_icon} from '../assets/icon/profle';
import { Notification } from '../components/notification/test_notification';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = ({navigation}: {navigation: any}) => {
  return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#D3A762',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          navigation={navigation}
          options={{
            headerShown: false,
            tabBarIcon: () => <Home_icon />,
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Scan_icon />,
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Order_icon />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Profile_icon />,
          }}
        />
        {/* <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: () => <Profile_icon />,
          }}
        /> */}
      </Tab.Navigator>
  );
};
