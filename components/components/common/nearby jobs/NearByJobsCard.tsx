import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function NearByJobsCard() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      padding: SIZES.medium,
      borderRadius: SIZES.small,
      backgroundColor: "#FFF",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
      gap: 10,
    },
    logoContainer: {
      width: 50,
      height: 50,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    logImage: {
      width: "70%",
      height: "70%",
    },
    textContainer: {
      flex: 1,
      marginHorizontal: SIZES.medium,
    },
    jobName: {
      fontSize: SIZES.medium,
      fontFamily: "DMBold",
      color: COLORS.primary,
    },
    jobType: {
      fontSize: SIZES.small + 2,
      fontFamily: "DMRegular",
      color: COLORS.gray,
      marginTop: 3,
      textTransform: "capitalize",
    },
  });

  type ConditionalStylesProps = {
    selectedJob: string;
    item: any;
  };
  const conditionalStyles = ({ selectedJob, item }: ConditionalStylesProps) =>
    StyleSheet.create({
      container: {
        width: 250,
        padding: SIZES.large,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
        borderRadius: SIZES.medium,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      },

      logoContainer: {
        width: 50,
        height: 50,
        backgroundColor:
          selectedJob === item.job_id ? "#1a1a1a" : COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },

      jobName: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: selectedJob === item.job_id ? COLORS.primary : COLORS.primary,
      },

      publisher: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.bold,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      },
    });

  const unconditionalStyles = StyleSheet.create({
    logoImage: {
      width: "70%",
      height: "70%",
    },
    companyName: {
      fontSize: SIZES.medium,
      fontFamily: FONT.regular,
      color: "#B3AEC6",
      marginTop: SIZES.small / 1.5,
    },
    infoContainer: {
      marginTop: SIZES.large,
      flexDirection: "row",
    },
    infoWrapper: {
      flexDirection: "row",
      marginTop: 5,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    location: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.regular,
      color: "#B3AEC6",
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/job/${234234234}`);
      }}
      style={styles.container}
    >
      <TouchableOpacity
        style={
          conditionalStyles({ item: { job_id: "2" }, selectedJob: "2" })
            .logoContainer
        }
      >
        <Image
          resizeMode="contain"
          style={styles.logImage}
          source={{
            uri: "https://i.pinimg.com/564x/f3/47/70/f34770503b90f26ea389f557500ff825.jpg",
          }}
        />
      </TouchableOpacity>

      <View style={{ flexDirection: "column" }}>
        <Text numberOfLines={1} style={unconditionalStyles.companyName}>
          Camio Company industry
        </Text>

        <Text
          numberOfLines={1}
          style={
            conditionalStyles({ item: { job_id: "3" }, selectedJob: "3" })
              .jobName
          }
        >
          React Js developer
        </Text>
      </View>
    </TouchableOpacity>
  );
}
