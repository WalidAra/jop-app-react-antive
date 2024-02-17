import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  icon?: string;
  dimensions: number;
  onPress?: () => void;
};

export default function ScreenHeaderBtn({ dimensions, icon , onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      {icon ? (
        <Icon name={icon} size={dimensions} />
      ) : (
        <View
          
          style={{
            padding: 1,
            borderWidth: 3,
            borderRadius: 9999,
            borderColor: "#999",
          }}
        >
          <Image
            style={{ borderRadius: 9999 }}
            source={{
              width: 45,
              height: 45,
              uri: "https://i.pinimg.com/564x/84/01/75/84017594880bc7c3568764c491d5d33a.jpg",
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
