import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";

function WelcomeScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      alert("All fields are required");
      return;
    }
    await axios.post("http://localhost:8001/api/signup", { email, password });
    alert("Sign Up Successful");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{ marginVertical: 100 }}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            styles={styles.logo}
            source={require("../assets/CalPal-white.png")}
          />
        </View>
        <View style={styles.containerView}>
          <Text style={styles.text}>Burn what you eat!!!</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="james@yahoo.com"
            autoCapitalize="words"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            secureTextEntry={true}
            autoCompleteType="password"
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 24 }}>
            {JSON.stringify({ email })}
          </Text>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 24 }}>
            {JSON.stringify({ password })}
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  imageStyles: { width: 100, height: 100, marginVertical: 20 },
  input: {
    height: height * 0.05,
    borderColor: colors.black,
    width: width * 0.8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.accent,
    color: colors.black,
    borderRadius: 5,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    width: width * 0.3,
    height: 50,
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: colors.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  logoContainer: {
    position: "absolute",
    top: (height - width * 0.5) / 2,
    left: (width - width * 0.5) / 2,
    alignItems: "center",
    justifyContent: "center", // Ensure the image is centered
    width: width * 0.5, // Same width as the image
    height: width * 0.5, // Same height as the image
  },
  text: {
    color: "red",
  },
});

export default WelcomeScreen;
