import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Constants from 'expo-constants';
import ScreenContainer from '../../components/ScreenContainer';
import { Window_Width, Window_Height} from '../../utils/constants';

const Checkout = ({ route, navigation }) => {
  const { Cart } = route.params;
  function CartElement({title, price, ing}) {
    return (
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
        <Text style={styles.BoldBody}>{title}</Text>
        <Text style={styles.BoldBody}>{price}</Text>
      </View>
    );
  }

  var sum = Cart.reduce(function(prev, cur) {
    return prev + cur.price;
  }, 0);

  var tax = sum * .0625;
  var total= tax+sum;
  global.totalcost =total;
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
          <View style={styles.headerContent}>
              <Image style={styles.logo} source={{uri: 'http://logok.org/wp-content/uploads/2014/03/Visa-2014-logo-blue-880x660.png'}}/>
              <Text style={styles.name}>Checkout</Text>
          </View>
      </View>
      <FlatList
              data={Cart}
              renderItem={({ item }) => (
                <CartElement
                title={item.title}
                price={item.price}
                ing={item.ing}
                />
              )}
              keyExtractor={item => item.id}
              />

      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style = {styles.BoldBody}>Sub-Total: {sum}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style = {styles.BoldBody}>Tax: {tax}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>  
        <Text style = {styles.BoldBody}>Total: {global.totalcost}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.GreyButton}
          onPress={() =>  {navigation.navigate('Menu')}}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.GreenButton}
          onPress={() => {navigation.navigate('Payment')}}
          >
          <Text style={styles.textStyle}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header:{
        backgroundColor: "#1a1f71",
  },
  headerContent:{
        padding:30,
        alignItems: 'center',
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 63,
    backgroundColor:"#E6E6FA",
   // borderWidth: 4,
    borderColor: "#E6E6FA",
      marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#faaa13",
    fontWeight:'600',
  },
  Body: {
    color: "#000000",
    textAlign: "left",
    fontSize: 20
  },
  BoldBody: {
    color: "#000000",
    textAlign: "left",
    fontSize: 20
  },
  GreyButton: {
    backgroundColor: "#999999", 
    flex: 1,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10
  },
  GreenButton:{
    backgroundColor: "#00e823", 
    flex: 1,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10
  },
});

export default Checkout;