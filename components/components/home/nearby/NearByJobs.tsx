import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";
import PopularJobCard from "../../common/popular jobs/PopularJobCard";
import { useRouter } from "expo-router";
import NearByJobsCard from "../../common/nearby jobs/NearByJobsCard";

export default function NearByJobs() {
   const router = useRouter();
   const isLoading = false;
   const error = false;

   const unconditionalStyles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: "space-between",
       alignItems: "center",
       flexDirection: "row",
       padding: SIZES.medium,
       borderRadius: SIZES.small,
       backgroundColor: "#FFF",
       ...SHADOWS.medium,
       shadowColor: COLORS.white,
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
   });
  return (
    <View style={{ marginTop: 15 }}>
      {/* header */}
      <View style={unconditionalStyles.header}>
        <Text style={unconditionalStyles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={unconditionalStyles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* card container */}
      <View style={{ gap: 10 }}>
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
        <NearByJobsCard />
      </View>
    </View>
  );
}
