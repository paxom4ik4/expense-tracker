import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#717171',
    borderBottomWidth: 2,
    height: 20,
  },
  headerText: {
    textAlign: 'center',
  }
})

export const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Tracker</Text>
      </View>
    </>
  )
};

