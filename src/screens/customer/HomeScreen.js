import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthContext from '../../constants/AuthContext';

const HomeScreen  = () => {
    const { signOut } = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={signOut} />
      </View>
    );
  }

  export default HomeScreen;