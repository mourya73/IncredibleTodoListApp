// src/layouts/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
