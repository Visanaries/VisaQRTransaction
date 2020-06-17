import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthContext from '../../constants/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../../components/Navigator';
const HomeScreen  = () => {
    // const { signOut } = React.useContext(AuthContext);
  
    return (
      // <View>
      //   <View>
      //    <Text>Signed in!</Text>
      //     <Button title="Sign out" onPress={signOut} />
      //   </View>

        <NavigationContainer>
          {/* <MyTabs /> */}
        </NavigationContainer>
      // </View>
    );
  }

  export default HomeScreen;

  