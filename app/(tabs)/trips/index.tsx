import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../../../components/Themed";
import { useState } from "react";
import { Avatar, Center, HStack, Heading, VStack } from "@gluestack-ui/themed";
import FirstTrip from "../../../components/trip/firstTrip";
import WatchTrips from "../../../components/trip/WatchTrips";
import { Link } from "expo-router";
import Header from "../../../components/trip/Header";
import { commonStyles } from "../../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta

export default function TabOneScreen() {
  const [trip, SetTrip] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 40,  }}>
      <Header />

       <Center>{trip === 0 ? <FirstTrip /> : <WatchTrips />}</Center>

    </View>
  );
}

