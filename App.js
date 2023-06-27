import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Registration } from "./Screens/RegistrationScreen";
import { Login } from "./Screens/LoginScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <Registration />
      {/* <Login /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
