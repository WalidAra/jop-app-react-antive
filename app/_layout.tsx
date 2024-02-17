import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { COLORS } from "@/constants";
import ScreenHeaderBtn from "@/components/components/ScreenHeaderBtn";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    DMbold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMmedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMregular: require("../assets/fonts/DMSans-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShown: true,
            presentation: "modal",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerLeft: () => {
              return <ScreenHeaderBtn dimensions={40} icon="menu" />;
            },
            headerRight: () => {
              return <ScreenHeaderBtn dimensions={40} />;
            },
            headerTitle: "",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
