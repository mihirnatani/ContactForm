import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const FormSubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ fontSize: 18, color: "#fff" }}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "rgba(27,27,51,1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default FormSubmitButton;
