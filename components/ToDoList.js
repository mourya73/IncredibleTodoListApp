import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';

  export default function ToDoList({ tasks }) {
    return (
      <ScrollView style={styles.container}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    marginVertical: 4,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
    completed: {
      backgroundColor: '#e0e0e0',
    },
   
    });