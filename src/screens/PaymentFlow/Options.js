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

const Options = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>Options</Text>
        </View>
      </View>

      <Button
        style={styles.optionButtons}
        title='PAY'
        onPress={() =>
          navigation.navigate('PayScreen', { screen: 'PayScreen' })
        }
      />
      <Button
        title='MENU'
        onPress={() => navigation.navigate('Menu', { screen: 'Menu' })}
      />
    </View>
  );
};

export default Options;

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
    paddingTop: 10,
    fontSize: 22,
    color: '#faaa13',
    fontWeight: '600',
  },
  optionButtons: {
    margin: 20,
    backgroundColor: '#1aaf71',
    color: 'white',
  },
});
