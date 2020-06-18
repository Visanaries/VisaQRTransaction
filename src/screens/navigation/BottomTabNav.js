import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREENS
import HomeScreen from '../customer/HomeScreen';
import ProfileScreen from '../customer/ProfileScreen';
import CameraQR from '../../components/QrScanner/CameraQR';
//import Camera from '../../components/QrScanner/CameraQrScanner';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNav = ({ navigation, route }) => {
  return (
    <BottomTab.Navigator headerMode="none">
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <BottomTab.Screen
        name='QRScanner'
        component={CameraQR}
        options={{
          title: 'QRScanner',
        }}
      />
    </BottomTab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';

    case 'Profile':
      return 'Profile';
  }
}

export default BottomTabNav;
