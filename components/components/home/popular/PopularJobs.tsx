import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";
import PopularJobCard from "../../common/popular jobs/PopularJobCard";
import { useRouter } from "expo-router";
export default function PopularJobs() {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  const unconditionalStyles = StyleSheet.create({
    container: {
      marginTop: SIZES.xLarge,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerTitle: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: COLORS.primary,
    },
    headerBtn: {
      fontSize: SIZES.medium,
      fontFamily: FONT.medium,
      color: COLORS.gray,
    },
    cardsContainer: {
      marginTop: SIZES.medium,
    },
  });

  return (
    <View style={unconditionalStyles.container}>
      {/* header */}
      <View style={unconditionalStyles.header}>
        <Text style={unconditionalStyles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={unconditionalStyles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* card container */}
      <View style={unconditionalStyles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            // keyExtractor={(item) => item.toString() + "rgergerg"}
            data={[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18,
            ]}
            renderItem={({ item }) => <PopularJobCard job={item} />}
          />
        )}
      </View>
    </View>
  );
}
