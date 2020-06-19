import React, {useState} from 'react';
import { View, Text, Button, ScrollView, Modal, TouchableOpacity, StyleSheet, FlatList, FlexBox } from 'react-native';
import { CheckBox } from 'react-native-elements'
import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';

const Items = [
  {
    id: 'bd743bea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hamburger',
    price: "$8",
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
    price: "$9",
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
    price: "$3",
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
    price: "$5",
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

function SubItem({ id, title}) {
  const [isChecked, setChecked] = useState(true)
  return (
    <CheckBox
    style={styles.modalText}
    title={title}
    checked= {isChecked}
    onPress={() => setChecked(!isChecked)}
    />
  );
}

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
              style={{ ...styles.openButton, backgroundColor: "#999999", flex: 1 }}
              >
                <Text style={styles.textStyle}>Add To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3", flex: 1 }}
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

const Menu = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
      <ScreenContainer>
        <Text style={styles.headerText}>Bubba's Burgers</Text>
        <Text>{"\n"}</Text>
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
      </ScreenContainer>
  );
};

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
      textAlign: "center"
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
      }
  });
  

export default Menu;
