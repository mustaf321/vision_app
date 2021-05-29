import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import axios from "axios";




export default function App() {

  const [temperature, getTemperature] = React.useState();
  const [config, setConfig]= React.useState({route: '' , wlan: '' , password:'' })



  const sendConfig = () => {
    let nam = {name}
    let direction ={rout}
    let secret = {password}
    setConfig({ route: direction.rout, wlan: nam.name, password: secret.password});


    console.log(config)
    //axios.post()
  }
  let [rout, setRoute]= React.useState();
  let [name, setName]= React.useState();
  let [password, setPassword]= React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.fatText}>Header </Text></View>
      <View style={styles.body}>
        <TextInput
            placeholder="http://exsampel"
            onChangeText={(val)=> setRoute(val)}
            style={styles.textField}></TextInput>
        <TextInput
            placeholder="Wlan name"
            onChangeText={(val)=> setName(val)}
            style={styles.textField}></TextInput>

        <TextInput
            placeholder="Password"
            onChangeText={(val)=> setPassword(val)}
            style={styles.textField}></TextInput>

        <View style={styles.subButton}>
          <Button
              onPress={sendConfig}
              title="sub"></Button>
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
