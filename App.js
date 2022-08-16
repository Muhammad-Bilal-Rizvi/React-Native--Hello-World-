import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InputForm from './inputForm';

export default function App() {
  const data = [
    {text: "Item1", id: "1"},
    {text: "Item2", id: "2"},
    {text: "Item3", id: "3"},
    {text: "Item4", id: "4"},
    {text: "Item5", id: "5"},
    {text: "Item6", id: "6"},
    {text: "Item7", id: "7"},
    {text: "Item8", id: "8"},
    {text: "Item9", id: "9"},
    {text: "Item10", id: "10"},
    {text: "Item11", id: "11"},
    {text: "Item12", id: "12"}
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Session_82U!</Text>
      <Text style={styles.heading}>Hello World!</Text>
      <InputForm />
      <FlatList 
      numColumns={3}
      data={data} 
      renderItem={({item})=> <Text style={styles.list}>{item.text}</Text> } 
      keyExtractor={(item) => item.id}  // if key not available in array then use this...
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: "700"
  },
  list: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#000000",
    color: '#fff',
    marginVertical: 5,
    marginHorizontal: 5
  }
});
