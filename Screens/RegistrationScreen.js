import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import BG from "../assets/img/BG.jpg";
import LOGOSVG from "../assets/add-icon.svg";

export const Registration = () => {
  const [login, onChangeLogin] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const keyboardVerticalOffset = Platform.OS === "ios" ? -140 : -136;

  const togleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ImageBackground style={styles.imageBg} source={BG}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <KeyboardAvoidingView
            behavior={behavior}
            keyboardVerticalOffset={keyboardVerticalOffset}
          >
            <View style={styles.form}>
              <View style={styles.photoWrap}>
                {/* <Image style={{ width: 120, height: 120, borderRadius: 16 }} /> */}
                <TouchableOpacity
                  style={{ position: "absolute", bottom: 14, right: -14 }}
                >
                  <View>
                    <LOGOSVG />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.formTitle}>Реєстрація</Text>
              <View>
                <TextInput
                  value={login}
                  onChangeText={onChangeLogin}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocusedLogin ? "#FFA500" : "#ccc",
                      borderWidth: isFocusedLogin ? 2 : 1,
                    },
                  ]}
                  onFocus={() => setIsFocusedLogin(true)}
                  onBlur={() => setIsFocusedLogin(false)}
                  placeholder="Логін"
                />
              </View>

              <View>
                <TextInput
                  value={email}
                  onChangeText={onChangeEmail}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocusedEmail ? "#FFA500" : "#ccc",
                      borderWidth: isFocusedEmail ? 2 : 1,
                    },
                  ]}
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                  placeholder="Адреса електронної пошти"
                />
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  value={password}
                  onChangeText={onChangePassword}
                  secureTextEntry={showPassword}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocusedPassword ? "#FFA500" : "#ccc",
                      borderWidth: isFocusedPassword ? 2 : 1,
                    },
                  ]}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  placeholder="Пароль"
                />
                <TouchableOpacity
                  onPress={togleShowPassword}
                  activeOpacity={0.7}
                  style={styles.showPasswordWrap}
                >
                  <Text style={styles.showPasswordTitle}>
                    {showPassword ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => Alert.alert("Work")}
                activeOpacity={0.7}
                style={styles.btn}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => Alert.alert("Work ask")}
              >
                <Text style={styles.linkTitle}>Вже є аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: { flex: 1, width: "100%" },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 90,
    paddingBottom: 45,
    position: "relative",
  },

  formTitle: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 20,
  },

  input: {
    height: 50,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },

  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  linkTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
  showPasswordWrap: {
    position: "absolute",
    top: 28,
    right: 16,
  },

  showPasswordTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  photoWrap: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: "-19%",
    left: "37%",
    borderRadius: 16,
  },
});
