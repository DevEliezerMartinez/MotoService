import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect } from "expo-router"

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    MontserratThin: require("../assets/fonts/Montserrat/static/Montserrat-Thin.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
    MontserratSemibold: require("../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratItalic: require("../assets/fonts/Montserrat/static/Montserrat-Italic.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    PoppinsExtraLight: require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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

  Redirect 

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={config}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         
        </Stack>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
