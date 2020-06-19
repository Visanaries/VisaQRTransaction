import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';

const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <View>
        <Text>Signed in!</Text>
        <Button title='Sign out' onPress={signOut} />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
