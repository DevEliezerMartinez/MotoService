import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { Image } from "react-native";
import { useFonts } from "expo-font";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const [loaded] = useFonts({
    MontserratThin: require("../../assets/fonts/Montserrat/static/Montserrat-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const ColorsSet = {
    light: {
      text: "#000",
      tint: "blue",
      tabIconDefault: "#ccc",
      tabIconSelected: "blue",
      orange: "#ffb900", // Agregar "orange" aquí con el valor que desees
    },
    dark: {
      text: "#fff",
      background: "#000",
      tint: "blue",
      tabIconDefault: "#ccc",
      tabIconSelected: "blue",
      orange: "#ffb900", // Agregar "orange" aquí con el valor que desees
      brown: "#78290f",
      blue: "#15616d",
      black: "#404040",
    },
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2DC653",
        tabBarStyle: {
          backgroundColor: ColorsSet.dark.black,
        },
      }}
    >
      {/* <Tabs.Screen
        name="Trips"
        
        options={{
          title: "Mis viajese",
          headerShown: true,
          tabBarLabelStyle: {
            fontFamily: "MontserratSemibold", // Usa el nombre definido en Font.loadAsync
            fontSize: 13,
          },
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/road-64.png")}
              style={{ width: 25, height: 25, tintColor: "#FFFFFF" }}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Garage"
        options={{
          title: "Garage",
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "MontserratSemibold", // Usa el nombre definido en Font.loadAsync
            fontSize: 13,
          },
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/Motorcycle.png")}
              style={{ width: 30, height: 30, tintColor: "#FFFFFF" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Services"
        options={{
          title: "Servicios",
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "MontserratSemibold", // Usa el nombre definido en Font.loadAsync
            fontSize: 13,
          },
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/tool-02.png")}
              style={{ width: 30, height: 30, tintColor: "#FFFFFF" }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          title: "Mis viajes",
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "MontserratSemibold", // Usa el nombre definido en Font.loadAsync
            fontSize: 13,
          },
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/road-64.png")}
              style={{ width: 25, height: 25, tintColor: "#FFFFFF" }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
