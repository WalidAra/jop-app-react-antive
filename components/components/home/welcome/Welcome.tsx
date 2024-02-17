import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, icons, FONT } from "@/constants";
import { StyleSheet } from "react-native";

const jobTypes: string[] = ["Full-time", "Remote", "Contractor"];

export default function Welcome() {
  const router = useRouter();
  const [activeJob, setActiveJob] = useState("Full-time");

  const conditionalStyles = (activeJob: string, item: string) =>
    StyleSheet.create({
      tab: {
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJob === item ? COLORS.secondary : COLORS.gray2,
      },
      tabText: {
        fontFamily: FONT.medium,
        color: activeJob === item ? COLORS.secondary : COLORS.gray2,
      },
    });

  const unconditionalStyles = StyleSheet.create({
    container: {
      width: "100%",
    },
    welcomeMessage: {
      fontFamily: FONT.bold,
      fontSize: SIZES.xLarge,
      color: COLORS.primary,
      marginTop: 2,
    },
    searchContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: SIZES.large,
      height: 50,
    },
    searchWrapper: {
      flex: 1,
      backgroundColor: COLORS.white,
      marginRight: SIZES.small,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: SIZES.medium,
      height: "100%",
    },
    searchInput: {
      fontFamily: FONT.regular,
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
      width: 50,
      height: "100%",
      backgroundColor: COLORS.tertiary,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    searchBtnImage: {
      width: "50%",
      height: "50%",
      tintColor: COLORS.white,
    },
    tabsContainer: {
      width: "100%",
      marginTop: SIZES.medium,
    },
  });

  return (
    <View style={unconditionalStyles.container}>
      <View>
        <Text style={unconditionalStyles.welcomeMessage}>Hello Walid !</Text>
        <Text style={unconditionalStyles.welcomeMessage}>
          Find your perfect job
        </Text>
      </View>

      <View style={unconditionalStyles.searchContainer}>
        <View style={unconditionalStyles.searchWrapper}>
          <TextInput
            placeholder="what are you looking for"
            value=""
            onChange={() => {}}
            style={unconditionalStyles.searchInput}
          />
        </View>

        <TouchableOpacity style={unconditionalStyles.searchBtn}>
          <Image
            source={icons.search}
            style={unconditionalStyles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={unconditionalStyles.tabsContainer}>
        <FlatList
          horizontal
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          data={jobTypes}
          renderItem={(job) => (
            <TouchableOpacity
              onPress={() => {
                setActiveJob(job.item);
                // router.push(`/search/${job.item}`);
              }}
              style={conditionalStyles(activeJob, job.item).tab}
            >
              <Text style={conditionalStyles(activeJob, job.item).tabText}>
                {job.item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
