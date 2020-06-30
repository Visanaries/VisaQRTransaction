import React, {useState} from 'react';
import { View, Text, Button, Image, Modal, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { CheckBox } from 'react-native-elements'
import ScreenContainer from '../../components/ScreenContainer';
import { Window_Width, Window_Height} from '../../utils/constants';
import Constants from 'expo-constants';

const Items = [
  {
    id: 'bd743bea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hamburger',
    price:8,
    inglist: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Lettuce',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tomato',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Onion',
      },
      {
          id: '58694a0f-3da1-473f-bd96-143331e29d72',
          title: 'Ketchup',
      },
  ],
  },
  {
    id: '3ac68afc-b105-48d3-a4f8-fbd91aa97f63',
    title: 'Cheeseburger',
    price: 9,
    inglist: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Lettuce',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tomato',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Onion',
      },
      {
          id: '58694a0f-3da1-473f-bd96-143331e29d72',
          title: 'Ketchup',
      },
      {
        id:'58694a0f-3da1-473f-bd96-1433346s9d72',
        title: 'Cheese',
      },
    ],
  },
  {
    id: '58694a0f-3da1-881f-bd96-108571e29d72',
    title: 'French Fries',
    price: 3,
    inglist: [
      {
          id: '58694a0f-3da1-473f-bd96-143331e29d72',
          title: 'Ketchup',
      },
    ],
  },
  {
    id: 'bd74aaaa-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Salad',
    price: 5,
    inglist: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Lettuce',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tomato',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Onion',
      },
      {
          id: '58694a0f-3da1-473f-bd96-143331e29d72',
          title: 'Salad Dressing',
      },
      {
        id: '58694a0f-3da1-473f-bd96-143331e29d72',
        title: 'Croutons',
      },
  ],
  },
];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Cart: [] };
  }
render() {
  var self = this;
  function Item({ id, title, price, inglist}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{flex:1}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.modalHeader}>{title}</Text>
                <Text style={styles.modalHeader}>{price}</Text>
              </View>
              <Text style={styles.modalSubHeader}>Items</Text>
              <FlatList
              data={inglist}
              renderItem={({ item }) => (
                <SubItem
                id={item.id}
                title={item.title}
                />
              )}
              keyExtractor={item => item.id}
              />
              <Text>{"\n"}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#1a1f71"}}
                onPress={() => {
                      self.setState({Cart: [...self.state.Cart, {id: id, title: title, price: price, ing: ""},]})
                  }
                }
                >
                  <Text style={styles.textStyle}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#999999"}}
                onPress={() => {
                setModalVisible(!modalVisible);
                }}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  function SubItem({ id, title}) {
    const [isChecked, setChecked] = useState(true)
    return (
      <CheckBox
      style={styles.modalText}
      title={title}
      checked= {isChecked}
      checkedColor='#1a1f71'
      onPress={() => setChecked(!isChecked)}
      />
    );
  }
  
  return ( 
  <ScreenContainer style={styles.container}>
  <View style={styles.header}>
      <View style={styles.headerContent}>
          <Image style={styles.logo} source={{uri: 'http://logok.org/wp-content/uploads/2014/03/Visa-2014-logo-blue-880x660.png'}}/>
          <Text style={styles.name}>McDonald's</Text>
      </View>
    </View>
  <FlatList
  data={Items}
  renderItem={({ item }) => (
    <Item
    id={item.id}
    title={item.title}
    price={item.price}
    inglist={item.inglist}
    />
  )}
  keyExtractor={item => item.id}
  />
  <Button style={{justifyContent: 'flex-end'}}title = "Checkout" onPress={() => this.props.navigation.navigate('Checkout', {Cart: this.state.Cart})}></Button>
  </ScreenContainer>
  );
    }
}

const styles = StyleSheet.create({
    headerText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center"
    },
    centeredView: {
      flex: 3,
      justifyContent: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "white",
      borderColor: "grey",
      borderWidth: 1,
      flex: 1,
      padding: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      flex: 1,
      marginBottom: 15,
      textAlign: "center",
    },
    modalHeader: {
      color: "black",
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center"
    },
    modalSubHeader: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left"
      },
      container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      item: {
        width: Window_Width,
        height: 65,
        backgroundColor: '#dcdcdc',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
        color:"#faaa09",
    
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
  });
  

export default Menu;
