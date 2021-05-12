import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button, Alert } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholderTextColor="#000" 
        placeholder="Enter wifi name"
        
      />
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholderTextColor="#000" 
        placeholder="Enter wifi password"
        
      />
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholderTextColor="#000" 
        placeholder="Enter direction"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

export default UselessTextInput;