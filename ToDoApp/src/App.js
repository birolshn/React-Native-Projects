import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import SearchCard from './components/SearchCard/SearchCard';
import TodoList from './components/TodoList/TodoList';



function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [todos, setTodos] = useState("");

  function updateCounter() {
    setCounter(counter + 1);
    const value = {
      id:counter,
      title:todos,
      isDeleted: false
    }
    setList([...list,value])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      
      <FlatList
        keyExtractor={item=>item.id}
        data={list}
        renderItem={(item) => <TodoList setTodo={item}/>}
      />
      
      <SearchCard
        onClick={updateCounter}
        text={todos}
        setText={setTodos}
      />
    </SafeAreaView>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102030',
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    
  },
  title: {
    color: '#daa520',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 10,
  },
 
  counter: {
    color: '#daa520',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 10,
  },
});

