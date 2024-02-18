import axios from "axios";
import { useRouter, useLocalSearchParams, Stack, Link } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";

type Params = {
  id: string;
};

export default function JobDetails() {
  const { id } = useLocalSearchParams<Params>();

  const router = useRouter();
  const fetchData = async () => {
    try {
      const res = await axios.post("");
      const data = await res.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitleStyle: { color: "black" },
          headerStyle: { backgroundColor: "white" },
          headerTitle: "",
          headerShadowVisible: true,
         
        }}
      />
      <Text style={{ color: "black" }}>here niggas {id} </Text>
    </ScrollView>
  );
}
