import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ScreenContainer = (props) => {
  return;
  <View style={styles.container}>{props.children}</View>;
}

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
