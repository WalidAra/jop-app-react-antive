import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, icons, images, SIZES } from "@/constants";
import { Redirect, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function Login() {
  const router = useRouter();
  const isUser = useSelector((state: RootState) => state.user).isUser;

  const handlePress = () => {
    router.navigate("/home");
  };

  if (isUser) {
    return <Redirect href={"/home/"} />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginContainer}>
            <View style={styles.iconContainer}>
              <Icon color={"black"} size={45} name="graduation-cap" />
            </View>

            <TextInput style={styles.input} placeholder="enter smh" />

            <TextInput style={styles.input} placeholder="enter smh" />

            <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  loginContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#EEE",
    borderRadius: 12,
    marginBottom: 20,
  },

  loginButton: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  loginButtonText: {
    color: "white",
  },
});
