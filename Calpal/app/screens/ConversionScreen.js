import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";

import colors from "../config/colors";

const kg_to_cal = 7716;
const lbs_to_cal = 3500;
const oz_to_cal = 219;
const grams_to_cal = 7.716;

// Conversion function
function convertToCalories(weight, unit) {
  let calories = 0;
  switch (unit.toLowerCase()) {
    case "kg":
      calories = weight * kg_to_cal;
      break;
    case "lbs":
      calories = weight * lbs_to_cal;
      break;
    case "oz":
      calories = weight * oz_to_cal;
      break;
    case "g":
      calories = weight * grams_to_cal;
      break;
    default:
      throw new Error('Invalid unit. Please use "kg", "lbs", or "oz".');
  }
  return calories;
}

function ConversionScreen(props) {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [calories, setCalories] = useState(null);

  const handleConvert = () => {
    try {
      const weightNum = parseFloat(weight);
      if (isNaN(weightNum) || weightNum <= 0) {
        Alert.alert(
          "Invalid weight",
          "Please enter a valid number for weight."
        );
        return;
      }
      const result = convertToCalories(weightNum, unit);
      setCalories(result);
    } catch (error) {
      Alert.alert("Conversion Error", error.message);
    }
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Enter A Value</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUnit}
        value={unit}
        placeholder="Enter unit (kg, lbs, oz, g)"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Enter Weight"
        keyboardType="numeric"
      />
      <Button title="Convert" onPress={handleConvert} />
      {calories !== null && (
        <Text style={styles.result}>Calories: {calories}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: colors.white,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.accent,
    color: colors.black,
    borderRadius: 5,
  },
  result: {
    fontSize: 20,
    color: colors.white,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 10,
  },
});

export default ConversionScreen;
