import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
  } from 'react-native';

  
const PayScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>PayScreen</Text>
          </View>
        </View>
  
       <Button title="PAY"  onPress={() =>
       navigation.navigate('Modal', { screen: 'Modal'})}/>
    
      </SafeAreaView>
    )
}

export default PayScreen



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
  });
  