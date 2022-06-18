import { Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const FormInput = (props) => {
  const { placeholder, label, style } = props;
  return (
    <>
      <Text style={styles.header}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={props.style || styles.input}
        {...props}
      ></TextInput>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
    marginTop: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 8,
    paddingTop: 6,
    paddingBottom: 6,
  },
});

export default FormInput;
