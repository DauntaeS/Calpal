import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          styles={styles.logo}
          source={require("../assets/logo-orange.png")}
        />
        <Text>Burn what you eat!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
