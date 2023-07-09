import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "./Screens/RegistrationScreen";
import { Login } from "./Screens/LoginScreen";

const Satck = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Satck.Navigator initialRouteName="Registration">
          <Satck.Screen name="Registration" component={Registration} />
          <Satck.Screen name="Login" component={Login} />
        </Satck.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
