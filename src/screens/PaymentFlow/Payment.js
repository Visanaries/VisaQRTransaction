import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>Paying {global.QRname}</Text>
        </View>
      </View>
      <TextInput style={styles.numInput} keyboardType='numeric' maxLength={5} placeholder="$"></TextInput>
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: constants.statusBarHeight,
  },
  item: {
    // width: Window_Width,
    height: 65,
    backgroundColor: '#dcdcdc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#faaa09',
  },
  header: {
    backgroundColor: '#1a1f71',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 63,
    backgroundColor: '#E6E6FA',
    // borderWidth: 4,
    borderColor: '#E6E6FA',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  name: {
    fontSize: 22,
    color: '#faaa13',
    fontWeight: '600',
  },
  numInput: {
    backgroundColor: '#faaa09',
    color: 'white',
    margin: 50,
    padding: 10,
    height:80,
    //width: undefined,
    alignItems: 'center',
    //alignSelf: 'center',
    fontSize: 50,
    fontWeight: '700',
    borderRadius: 15,
  },
});
