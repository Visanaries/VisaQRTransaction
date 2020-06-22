import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';
import { Assets } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer style = {styles.container}>
      <View style = {styles.signInView}>
        <Image style = {styles.visaLogo} source = {require("../../image_resources/VisaLogo.png")} />
        <TextInput style = {styles.textInput}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput style = {styles.textInput}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style = {styles.signUpButton} onPress={() => signIn({ username, password })}>
          <Text style = {styles.signUpText}>SIGN IN</Text>
        </TouchableOpacity>
        <Button style = {styles.signUpButton}
          title='Sign Up' 
          onPress={() => signIn({ username, password })}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>Don't have an account!? Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInView:
  {

  },
  textInput: 
  {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    margin: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "#F7B600",
    borderRadius: 10,
  },
  signUpButton:
  {
    backgroundColor: "#1A1F71",
    margin: 20,
    marginTop: 30,
    alignItems: "center",
    //borderWidth: 2,
    //borderColor: "#F7B600",
    borderRadius: 50,
    shadowColor: 'rgba(0,0,0, .5)',           // iPhone
    shadowOffset: { height: 2, width: 2 },    // iPhone
    shadowOpacity: 1,                         // iPhone
    shadowRadius: 2,                          // iPhone
    elevation: 2,                             //Android
  },
  signUpText:
  {
    color: "#FFFFFF",
    padding: 13,
    fontSize: 25,
  }, 
  visaLogo:
  {
      width: 109,
      height: 68,
      alignSelf: "center",
  },
});

export default SignIn;
