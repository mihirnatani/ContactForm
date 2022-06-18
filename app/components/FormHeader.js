import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FormHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact</Text>
        <Text style={styles.heading}> Us</Text>
      </View>
      <Text style={styles.subheading}>
        Fill out this form to connect with us
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },
  subheading: {
    fontSize: 18,
    color: "#1b1b33",
    marginTop: 20,
    textAlign: "center",
  },
});

export default FormHeader;
