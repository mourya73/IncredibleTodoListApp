// src/layouts/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Your Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    padding: 10,
    backgroundColor: 'darkblue',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
