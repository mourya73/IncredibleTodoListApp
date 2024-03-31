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
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    }
    });