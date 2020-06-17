import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <View>
        <TextInput
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
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

export default SignIn;
