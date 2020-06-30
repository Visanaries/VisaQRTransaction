import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';
import CustomerQRGenorator from '../../components/CustomerQR/CustomerQRGenorator';
const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
      <ScreenContainer>
        <View>
          
          <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Text style={styles.name}>{global.username} profile page</Text>
              </View>
            
            </View>
            <View>
            <CustomerQRGenorator/> 
            </View>
          <View>
          <Button title='Sign out' onPress={signOut} />
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
        backgroundColor: "#1a1f71",
      
      },
      middler:{
        backgroundColor: "#FFFFFF",
      
      },
      footer:{
        backgroundColor: "#1a1f71",
      
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
        color:"#faaa13",
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
  
});

export default HomeScreen;
