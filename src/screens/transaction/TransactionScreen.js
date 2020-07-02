import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';

const TransactionScreen = () => {
  const [transactionHistory, setTransactionHistory] = React.useState('');
  React.useEffect(() => {
    //GET request
    fetch(
      `http://192.168.1.27:5000/transactionHistory/${global.username}/${global.password}`,
      {
        method: 'GET',
        //Request Type
      }
    )
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
            <Text style={styles.name}>{global.username}'s Transactions</Text>
          </View>
        </View>

        {/* Transaction History */}
        <FlatList
          inverted
          style={styles.transactionList}
          data={transactionHistory}
          renderItem={({ item, index }) => (
            <View style={styles.listItemView}>
              <Text style={styles.transactionNameText}>
                {transactionHistory[index].name}
              </Text>
              <Text style={styles.transactionAmountText}>
                ${transactionHistory[index].amount.toFixed(2)}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1F71',
  },
  headerContent: {
    padding: 40,
    alignItems: 'center',
  },
  name: {
    fontSize: 35,
    color: '#faaa13',
    fontWeight: 'bold',
  },
  transactionList: {
    color: 'black',
    fontSize: 20,
    margin: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',

    // borderWidth: 3,
    // borderColor: '#F7B600',
    borderRadius: 15,
  },
  listItemView: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    borderColor: '#1A1F71',
    borderWidth: 2,
  },
  transactionNameText: {
    color: '#000000',
    textAlign: 'left',
    fontSize: 20,
  },
  transactionAmountText: {
    textAlign: 'right',
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default TransactionScreen;
