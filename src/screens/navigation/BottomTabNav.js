import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREENS

import HomeScreen from '../customermerchant/HomeScreen';
// import ProfileScreen from '../customermerchant/ProfileScreen';
// import CameraQR from '../../components/QrScannerCamera/CameraQR';
import QRScannerScreen from '../../screens/QRscanner/QRScannerScreen';
import MerchantScreen from '../merchant/MerchantScreen';
import CustomerMerchantScreen from '../customermerchant/CustomerMerchantScreen';
import eCards from '../eCards/eCards';
import CameraQR from '../../components/QrScannerCamera/CameraQR';
import Menu from '../menu/Menu';


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
        name='Merchant'
        component={MerchantScreen}
        options={{
          title: 'Merchant',
        }}
      />
      <BottomTab.Screen
        name='Menu'
        component={Menu}
        options={{
          title: 'Menu',
        }}
      />

      <BottomTab.Screen
        name='CMerchant'
        component={CustomerMerchantScreen}
        options={{
          title: 'CMerchant',
        }}
      />
      <BottomTab.Screen
        name='eCards'
        component={eCards}
        options={{
          title: 'eCards',
        }}
      />

      <BottomTab.Screen
        name='QR'
        component={CameraQR}
        options={{
          title: 'QR',
        }}
      />

      {/* <BottomTab.Screen
        name='QA'
        component={CameraQR}
        options={{
          title: 'QA',
        }}
      />
      <BottomTab.Screen
        name='QRB'
        component={CameraQR}
        options={{
          title: 'QRB',
        }}
      /> */}
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
    case 'Menu':
      return 'Menu';
  }
}

export default BottomTabNav;
