import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/constants";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const GoogleAuthBtn = () => {
  const googleAuth = new GoogleAuthProvider();
  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });

  const LoginWithGoogle = async () => {
    const firebaseResult: any = await signInWithPopup(auth, googleAuth);

    console.log("====================================");
    console.log("firebase result brooo :", firebaseResult);
    console.log("====================================");
  };
  return (
    <TouchableOpacity onPress={LoginWithGoogle} style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Continue with google</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthBtn;

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
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  loginButtonText: {
    color: "white",
  },
});
