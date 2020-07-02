import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, } from 'react-native';
import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';
import CustomerQRGenorator from '../../components/CustomerQR/CustomerQRGenorator';
import { ListItem } from 'react-native-elements';
const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  const [funds, setFunds] = React.useState('');
  const [transactionHistory, setTransactionHistory] = React.useState('');

  React.useEffect(() => {
    //GET request 
    fetch(`http://192.168.1.8:5000/funds/${global.username}/${global.password}`, {
        method: 'GET' 
        //Request Type 
    })
    .then((response) => response.json())
    .then((responseJson) => {
        //Get funds
        setFunds(responseJson.Funds);
    })
    //If response is not in json then in error
    .catch((error) => {
        console.error(error);
    });
  }, []);

  React.useEffect(() => {
    //GET request 
    fetch(`http://192.168.1.8:5000/transactionHistory/${global.username}/${global.password}`, {
        method: 'GET' 
        //Request Type 
    })
    .then((response) => response.json())
    .then((responseJson) => {
        //Get funds
        setTransactionHistory(responseJson.Transactions);
        //alert(transactionHistory[0].amount);
        //console.log(transactionHistory[0].amount);
    })
    //If response is not in json then in error
    .catch((error) => {
        console.error(error);
    });
  }, []);

  return (
      <ScreenContainer>
        <View>
          
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>{global.username} Home Page</Text>
            </View>
          </View>

          <View>
            <CustomerQRGenorator/> 
          </View>

          <View>
            <TouchableOpacity style = {styles.signOutButton} onPress={() => signOut()}>
              <Text style = {styles.signOutText}>SIGN OUT</Text>
            </TouchableOpacity>
          </View>

          <View>
            {/* Funds */}
            <Text>Funds: {Number(funds).toFixed(2)}</Text>
            {/* Transaction History */}
            <Text>Transaction History:</Text>
            <FlatList
              inverted
              style={styles.transactionList}
              data={transactionHistory}
              renderItem={({ item, index }) => (
                <View style = {styles.listItemView}>
                  <Text style = {styles.transactionNameText}>{transactionHistory[index].name}</Text>
                  <Text style = {styles.transactionAmountText}>${transactionHistory[index].amount.toFixed(2)}</Text>
                </View>
              )}
              keyExtractor={(item) => item.index}
              showsVerticalScrollIndicator={false}
            />
          </View>

        </View>
        
      </ScreenContainer>
    );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color:"#faaa09",

  },
    header:{
        backgroundColor: "#1A1F71",
      
      },
      middler:{
        backgroundColor: "#FFFFFF",
      
      },
      footer:{
        backgroundColor: "#1A1F71",
      
      },
      headerContent:{
        padding:30,
        alignItems: 'center',        
      },
      middlerContent:{
        padding:30,
        alignItems: 'center',
        height: 500, 
      },
      footerContent:{
        padding:30,
        alignItems: 'center',
      },
      logo: {
        // width: 150,
        // height: 150,
        //borderRadius: 63,
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
        fontSize:35,
        color:"#FFFFFF",
        fontWeight: 'bold',
      },
      background_size: {
        marginTop: 100,
        width: 200,
        height: 200,
        alignItems: 'center'
    },
      body: {
        padding:30,
        backgroundColor :"#E6E6FA",
      },
      box: {
        padding:5,
        marginTop:5,
        marginBottom:5,
        backgroundColor: '#000042',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height:1,
          width:-2
        },
        elevation:2
      },
      username:{
        color: "#E6E6FA",
        fontSize:22,
        alignSelf:'center',
        marginLeft:10
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
      signOutButton:
      {
        backgroundColor: "#1A1F71",
        margin: 20,
        marginTop: 25,
        alignItems: "center",
        borderRadius: 50,
        shadowColor: 'rgba(0,0,0, .5)',           // iPhone
        shadowOffset: { height: 2, width: 2 },    // iPhone
        shadowOpacity: 1,                         // iPhone
        shadowRadius: 2,                          // iPhone
        elevation: 2,                             //Android
      },
      signOutText:
      {
        color: "#FFFFFF",
        padding: 13,
        fontSize: 25,
      }, 
      transactionList:
      {
        color: "black",
        fontSize: 20,
        margin: 20,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderWidth: 3,
        borderColor: "#F7B600",
        borderRadius: 15,
      },
      listItemView:
      {
        //backgroundColor: "#FFFFFF",
        margin: 3,
        padding: 10,
        borderRadius: 15,
        borderColor: "#1A1F71",
        borderWidth: 2,
      },
      transactionNameText:
      {
        color: "#000000",
        textAlign: "left",
        fontSize: 20,
      },
      transactionAmountText:
      {
        textAlign: "right",
        color: "#000000",
        fontSize: 20,
      },
});

export default HomeScreen;
