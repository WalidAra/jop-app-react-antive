import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants/";
import { useRouter } from "expo-router";
import Welcome from "@/components/components/home/welcome/Welcome";
import PopularJobs from "@/components/components/home/popular/PopularJobs";
import NearByJobs from "@/components/components/home/nearby/NearByJobs";

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.index}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <View style={{ flex: 1 }}>
            <Welcome />
          </View>
          <PopularJobs />
          <NearByJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});
