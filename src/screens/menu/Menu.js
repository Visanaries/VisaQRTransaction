import React, {useState} from 'react';
import { View, Text, Button, ScrollView, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AuthContext from '../../constants/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';

const Items = [
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
  ];

function Item({ id, title, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? 'green' : 'red' },
        ]}
      >
        <Text style={styles.modalText}>{title}</Text>
      </TouchableOpacity>
    );
}

const Menu = () => {
  const { signOut } = React.useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <ScreenContainer>
      <ScrollView>
        <Text style={styles.headerText}>Bubba's Burgers</Text>
        <Text>{"\n"}</Text>
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
            <Text style={styles.modalHeader}>Hamburger - $8</Text>
            <Text style={styles.modalSubHeader}>Items</Text>
            <FlatList
            data={Items}
            renderItem={({ item }) => (
                <Item
                id={item.id}
                title={item.title}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
            />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
            />
             <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#999999" }}
            >
              <Text style={styles.textStyle}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
            setModalVisible(true);
          }}
      >
        <Text>Hamburger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
            setModalVisible(true);
          }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
            setModalVisible(true);
          }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
        <Button title='Sign out' onPress={signOut} />
      </ScrollView>
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
      marginBottom: 15,
      textAlign: "center"
    },
    modalHeader: {
      color: "black",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center"
    },
    modalSubHeader: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "left"
      }
  });
  

export default Menu;
