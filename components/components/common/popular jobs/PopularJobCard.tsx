import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";
import React from "react";
import { View, Text , TouchableOpacity , Image, StyleSheet } from "react-native";

type Props = {
  job: any;
  selectedJob?:string;
  handleCardPress?:()=> void;
};

export default function PopularJobCard({ job }: Props) {

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

  type ConditionalStylesProps = {
    selectedJob: string, item: any
  }

  const conditionalStyles = ({selectedJob , item}:ConditionalStylesProps) =>
    StyleSheet.create({
      container: {
        width: 250,
        padding: SIZES.xLarge,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      },

      logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },

      jobName: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      },

      publisher: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.bold,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      },
    });


  return (
    <TouchableOpacity style={conditionalStyles({item:{job_id:"3"} , selectedJob:"3"}).container} onPress={() => {}}>
      <TouchableOpacity
        style={
          conditionalStyles({ item: { job_id: "2" }, selectedJob: "2" })
            .logoContainer
        }
      >
        <Image
        resizeMode="contain"
        style={unconditionalStyles.logoImage}
          source={{
            
            uri: "https://i.pinimg.com/564x/f3/47/70/f34770503b90f26ea389f557500ff825.jpg",
          }}
        />
      </TouchableOpacity>

      <Text numberOfLines={1} style={unconditionalStyles.companyName} > Camio Company industry </Text>

      <View style={unconditionalStyles.infoContainer} >
        <Text numberOfLines={1} style={conditionalStyles({item:{job_id:"3" } , selectedJob:"3"}).jobName} >React Js developer</Text>
          <Text style={unconditionalStyles.location} >Algeria</Text>
      </View>
    </TouchableOpacity>
  );
}
