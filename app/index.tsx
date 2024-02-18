import Login from "@/components/components/log/Login";
import { COLORS } from "@/constants";
import ProviderRedux from "@/redux/Provider";
import currentStore from "@/redux/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function App() {

  useEffect(() => {
    // Store a value
    AsyncStorage.setItem("name", "Alice");

    // Retrieve a value
    AsyncStorage.getItem("name").then((value) => {
      console.log(value); // Alice
    });

    // Remove a value
    AsyncStorage.removeItem("name");
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Provider store={currentStore}>
        <Login />
      </Provider>
    </SafeAreaView>
  );
}
