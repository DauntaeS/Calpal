import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

import colors from "../config/colors";

function ConversionScreen(props) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <ImageBackground
      resizeMode="container"
      style={styles.background}
      source={require("../assets/Conversionbg.jpg")}
    >
      <Text>Enter A Value</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <View style={styles.convertButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  convert: {
    backgroundColor: "#000",
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ConversionScreen;
