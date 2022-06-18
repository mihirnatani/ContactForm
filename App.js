import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import FormHeader from "./app/components/FormHeader";
import ContactForm from "./app/components/ContactForm";

export default function App() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 60 }}>
        <View style={{ height: 80 }}>
          <FormHeader />
        </View>
        <KeyboardAvoidingView>
          <ContactForm />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
