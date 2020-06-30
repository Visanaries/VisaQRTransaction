import React from 'react';
import { SafeAreaView,Linking, View, FlatList, StyleSheet, Text, Image,  ImageBackground, ActivityIndicator  } from 'react-native';
import Constants from 'expo-constants';
//import { Window_Width, Window_Height} from '../../utils/constants';
//import Router from '../navigation/Router';


import { TouchableOpacity } from 'react-native-gesture-handler';







export default function CustomerMerchantScreen({ navigation }) {

  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>Scan For Payment</Text>
             </View>
          
          </View>
          <View>
           <View style={styles.middlerContent}>
             <TouchableOpacity
              onPress={() => navigation.navigate('CameraQR')}
             >
           <ImageBackground 
                source={{uri: 'https://www.dummies.com/wp-content/uploads/324172.image0.jpg'}}
                style = {styles.background_size}
                >
                
                
                </ImageBackground>
                </TouchableOpacity>
                {/* <ApiCallerQR/>  */}
                <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://api.qr-code-generator.com/v1/create/')}>
  Google
</Text> 

            </View> 
            
            </View>
            <View  style={styles.footer}>
            <View style={styles.footerContent}>
                <Text style={styles.name}>Scan For Payment</Text>
            </View>
            </View>
        </View>


      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
    </SafeAreaView>
  );
}
// container: {
//     width: Window_Width,
//     height: Window_Height,
//     alignItems: 'center',
//     backgroundColor: '#DCDCDC',
//     //backgroundColor: '#d1d1d1',
// },
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
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
