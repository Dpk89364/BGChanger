import React, { useState } from 'react'
import {
Text,
StyleSheet,
View,
TouchableOpacity,
StatusBar,
} from 'react-native'

const App = () => {


  const[randomColor,setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBG = () => {
    const color = "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"; 
    setRandomColor(color);
  };
  const changeDefault = () => {
    const color = "rgb(1, 1, 1)";
    setRandomColor(color);
  };

  

  return(

    <>
    <StatusBar backgroundColor={randomColor}></StatusBar>
    <View style={[styles.Container,{backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeBG}>
      <Text style={styles.text}>Tap Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeDefault}>
      <Text style={styles.text1}>Default</Text>
      </TouchableOpacity>
    </View>


    </>
  );

}; 

export default App;

const styles = StyleSheet.create({

  Container: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  text: {

    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  },

  text1: {

    fontSize: 30,
    backgroundColor: "#BB2CD9",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  },

})