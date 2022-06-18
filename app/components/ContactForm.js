import { View, Text, Linking } from "react-native";
import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdator) => {
  stateUpdator(error);
  setTimeout(() => {
    stateUpdator("");
  }, 5000);
};

const isValidEmail = (value) => {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regx.test(value);
};

const ContactForm = () => {
  const [userInfo, setUserInfo] = useState({
    Name: "",
    Email: "",
    MobileNo: "",
    Comment: "",
  });

  const { Name, Email, MobileNo, Comment } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const [error, setError] = useState("");
  const isValidForm = () => {
    // To check if fields have some value or not
    if (!isValidObjField(userInfo))
      return updateError("All fields are required*", setError);

    // checking minimum length of name
    if (!Name.trim() || Name.length < 2)
      return updateError("Invalid name!", setError);

    // checking Email validation
    if (!isValidEmail(Email)) return updateError("Invalid Email!", setError);

    // checking for a minimum 10 digit mobile number
    if (!MobileNo.trim() || MobileNo.length != 10)
      return updateError("Invalid Mobile Number !", setError);

    // minimum comment length should be 2
    if (!Comment.trim() || Comment.trim() < 2)
      return updateError("Too short for a comment", setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      const subject = "Contact Form";

      Linking.openURL(
        `mailto:info@redpositive.in?subject=${subject}&body=
      Name: ${Name}

      Email: ${Email}

      Mobile No: ${MobileNo}

      Comment: ${Comment}`
      );
    }
  };

  return (
    <View>
      {error ? (
        <Text style={{ color: "red", textAlign: "center", marginTop: 45 }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={Name}
        label="Name"
        onChangeText={(value) => handleOnChangeText(value, "Name")}
        placeholder="John"
      />
      <FormInput
        value={Email}
        autoCapitalize="none"
        label="Email"
        onChangeText={(value) => handleOnChangeText(value, "Email")}
        placeholder="mail@address.com"
      />
      <FormInput
        value={MobileNo}
        label="Mobile"
        placeholder="123-456-789-0"
        keyboardType="numeric"
        onChangeText={(value) => handleOnChangeText(value, "MobileNo")}
      />
      <FormInput
        value={Comment}
        label="Comment"
        placeholder="At first there was nothing..."
        multiline={true}
        numberOfLines={4}
        onChangeText={(value) => handleOnChangeText(value, "Comment")}
        style={{
          height: 200,
          textAlignVertical: "top",
          borderWidth: 1,
          borderColor: "#1b1b33",
          borderRadius: 8,
          fontSize: 16,
          marginLeft: 20,
          marginRight: 20,
          paddingLeft: 8,
          paddingTop: 6,
          paddingBottom: 6,
        }}
      />
      <FormSubmitButton onPress={submitForm} />
    </View>
  );
};

export default ContactForm;
