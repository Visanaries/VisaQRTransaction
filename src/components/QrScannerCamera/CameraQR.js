import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CameraQR({ navigation }) {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`This QR code belongs to ${data} payment services!`);
    //console.log(data);
    // var data1= data;
    //this.setState({data:data});
    //let dataa = this.props.data;
  //  Linking.openURL({data})
    setData(data)
    global.QRname = data;
    console.log(global.QRname);
  };
 
  //var { data } = this.state
  //console.log(data);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
    

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
         
      />
      <Button title={'Go Back'} onPress={() => navigation.goBack()}/>
       <Button title={`Tap to Follow Scanned Link to ${global.QRname}`}onPress={() => navigation.navigate('Menu')}/> 
      
      {scanned && (
       
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      
    </View>
  );
}
