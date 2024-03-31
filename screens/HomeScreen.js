import React from 'react';
import { Button, Text, View } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (taskText) => {
        if (!tasks.includes(taskText)) {
          setTasks([...tasks, taskText]);
        }
      };
    
      return (
        <MainLayout>
            <SafeAreaView>
            <ToDoForm  addTask={addTask}/>
            <ToDoList tasks={tasks} />
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
            
            </SafeAreaView>
        </MainLayout>
      );
}

export default HomeScreen;
