import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.background}>
      <View style={styles.containerView}>
        <Image
          resizeMode="contain"
          styles={styles.logo}
          source={require("../assets/CalPal-white.png")}
        />
        <Text style={styles.text}>Burn what you eat!!</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="james@yahoo.com"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
        />
        <Button title="Login" style={styles.loginButton} />
        <Button title="Sign Up" style={styles.registerButton} />
      </View>
    </View>
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
  containerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: colors.black,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.accent,
    color: colors.black,
    borderRadius: 5,
  },
  loginButton: {
    width: "80%",
    height: 70,
  },
  logo: {
    width: "50%",
    height: undefined,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
  },
  text: {
    color: "red",
  },
});

export default WelcomeScreen;
