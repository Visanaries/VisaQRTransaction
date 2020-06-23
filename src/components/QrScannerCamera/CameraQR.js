// import React from 'react';
// import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';




// export default class CameraQR extends React.Component {
//   state = {
//     //hasPermission: null,
//     cameraType: Camera.Constants.Type.back,
//   }

//   async componentDidMount() {
//     this.getPermissionAsync()
//   }

//   getPermissionAsync = async () => {
//     // Camera roll Permission 
//     if (Platform.OS === 'ios') {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//     // Camera Permission
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasPermission: status === 'granted' });
//   }

//   handleCameraType=()=>{
//     const { cameraType } = this.state

//     this.setState({cameraType:
//       cameraType === Camera.Constants.Type.back
//       ? Camera.Constants.Type.front
//       : Camera.Constants.Type.back
//     })
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       let photo = await this.camera.takePictureAsync();

//     }
//   }

//   pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images
//     });
//   }
  

//   render(){
//     const { hasPermission } = this.state
//     if (hasPermission === null) {
//       return <View />;
//     } else if (hasPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//           <View style={{ flex: 1 }}>
//             <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
//               <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: 'flex-end',
//                     alignItems: 'center',
//                     backgroundColor: 'transparent'                 
//                   }}
//                   onPress={()=>this.pickImage()}>
//                   <Ionicons
//                       name="ios-photos"
//                       style={{ color: "#fff", fontSize: 40}}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: 'flex-end',
//                     alignItems: 'center',
//                     backgroundColor: 'transparent',
//                   }}
//                   onPress={()=>this.takePicture()}
//                   >
//                   <FontAwesome
//                       name="camera"
//                       style={{ color: "#fff", fontSize: 40}}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: 'flex-end',
//                     alignItems: 'center',
//                     backgroundColor: 'transparent',
//                   }}
//                   onPress={()=>this.handleCameraType()}
//                   >
//                   <MaterialCommunityIcons
//                       name="camera-switch"
//                       style={{ color: "#fff", fontSize: 40}}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </Camera>
//         </View>
//       );
//     }
//   }
  
// }


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
