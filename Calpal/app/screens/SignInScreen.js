import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";

const SignInScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    if (name === "" || email === "" || password === "") {
      alert("All fields are required");
      return;
    }
    await axios.post("http://localhost:8001/api/signin", {
      name,
      email,
      password,
    });
    alert("Sign In Successful");
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{ marginVertical: 100 }}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/CalPal-white.png")}
            style={styles.imageStyles}
          />
        </View>
        <Text style={styles.signupText}>Sign In</Text>
        <View style={styles.containerView}>
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
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, textAlign: "center" }}>
            Not yet registered?{" "}
            <Text
              style={{ color: "darkred", fontWeight: "bold" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </Text>
          <Text style={{ fontSize: 12, textAlign: "center", marginTop: 10 }}>
            Forgot Password?
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  signupText: {
    fontSize: 30,
    textAlign: "center",
  },
  signupInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    height: 50,
    marginBottom: 20,
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
});

export default SignInScreen;
