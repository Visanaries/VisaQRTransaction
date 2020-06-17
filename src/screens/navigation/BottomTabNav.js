import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREENS
import HomeScreen from '../customer/HomeScreen';
import ProfileScreen from '../customer/ProfileScreen';
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
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <BottomTab.Screen
        name='Menu'
        component={Menu}
        options={{
          title: 'Menu',
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
    case 'Menu':
      return 'Menu';
  }
}

export default BottomTabNav;
