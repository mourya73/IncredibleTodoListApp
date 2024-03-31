// AboutScreen.js
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>App Name: ToDo List</Text>
        <TouchableOpacity onPress={() => setShowEasterEgg(!showEasterEgg)}>
          <Text style={styles.name}>Your Name</Text>
        </TouchableOpacity>
        {showEasterEgg && <Text style={styles.easterEgg}>You found the Easter egg! 🥚</Text>}
        <Text>Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  easterEgg: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default AboutScreen;
