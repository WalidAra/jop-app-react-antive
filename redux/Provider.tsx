import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import currentStore from "./store/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants";

const ProviderRedux = () => {
  return (

        <Text style={{ width: "100%", flex: 1, backgroundColor: "red" }}>
          {children}
        </Text>

  );
};

export default ProviderRedux;
