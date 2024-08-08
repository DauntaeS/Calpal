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
    <View style={styles.background}>
      <View style={styles.containerView}>
        <Image
          resizeMode="contain"
          styles={styles.logo}
          source={require("../assets/CalPal-white.png")}
        />
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
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
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
  buttonStyle: {
    backgroundColor: colors.primary,
    width: "100%",
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
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    color: "red",
  },
});

export default WelcomeScreen;
