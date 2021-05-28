import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.fatText}>Header</Text></View>
      <View style={styles.body}>
        <TextInput style={styles.textField} placeholder="hello"></TextInput>
        <TextInput style={styles.textField}></TextInput>
        <TextInput style={styles.textField}></TextInput>
        <View style={styles.subButton}>
          <Button title="sub"></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0000ff',
    padding : 20,
  },

  body: {
    backgroundColor: '#ededed',
    padding: 20,
  },
  textField:{
    backgroundColor:'#bdbdbd',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  fatText:{
    fontWeight: 'bold',
  },
  subButton:{
    backgroundColor: '#4cbc00',
    margin: 22,
    height: 40,
  }
});
