import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { TextInput } from 'react-native-gesture-handler';

function getgetPayment() {
  //return fetch(`http://10.0.0.226:5000//payMerchant/${global.totalcost}/${global.username}/${global.password}/${global.QRname}`)
  return fetch(
    `http://192.168.1.8:5000//payMerchant/${global.totalcost}/${global.username}/${global.password}/${global.QRname}`
  )
    .then((response) => response.json())
    .then((json) => {
      global.totalcost = '0.00';
      global.QRname = '';
    })
    .catch((error) => {
      console.error(error);
    });
  // alert(global.totalcost);
  // console.log(global.totalcost);
}

const Payment = ({ navigation }) => {
  let payAndNav = () => {
    getgetPayment();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>Options</Text>
        </View>
      </View>
      {/* <TextInput style={styles.numInput} keyboardType='numeric' maxLength={5} placeholder="$"></TextInput> */}
      <View style={styles.buttons}>
        <Button
          style={{ fontWeight: '700' }}
          title='Pay'
          onPress={() => payAndNav()}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Input Amount'
          onPress={() => navigation.navigate('PayScreen')}
        />
      </View>
      <View style={styles.buttons}>
        <Button title='Menu' onPress={() => navigation.navigate('Menu')} />
      </View>
      <View style={(styles.buttons, styles.cancelButton)}>
        <Button title='Cancel' onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
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
    height: 80,
    //width: undefined,
    alignItems: 'center',
    //alignSelf: 'center',
    fontSize: 50,
    fontWeight: '700',
    borderRadius: 15,
  },
  buttons: {
    backgroundColor: '#faaa13',
    padding: 20,
    margin: 10,
  },
  cancelButton: {
    marginTop: 375,
    marginHorizontal: 20,
    backgroundColor: '#ff5148',
  
  },
});
