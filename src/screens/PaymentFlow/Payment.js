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

function getMoviesFromApi() {
  return fetch('/payMerchant/<string:amount>/<string:username>/<string:password>/<string:merchant>')
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

const PayScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>PAY</Text>
        </View>
      </View>
      <TextInput style={styles.numInput} keyboardType='numeric' maxLength={5} placeholder="$"></TextInput>
      <Button title='Pay' onPress={() => navigation.navigate('Payment')} />
      <Button title='Menu' onPress={() => navigation.navigate('Menu')} />
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default PayScreen;

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