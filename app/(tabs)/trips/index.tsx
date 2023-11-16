import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../../../components/Themed";
import { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  VStack,
} from "@gluestack-ui/themed";
import FirstTrip from "../../../components/trip/firstTrip";
import WatchTrips from "../../../components/trip/WatchTrips";
import { Link } from "expo-router";
import Header from "../../../components/trip/Header";
import { commonStyles } from "../../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta
import { useDispatch, useSelector } from "react-redux";
export default function TabOneScreen() {

  const miDato = useSelector((state: { miDato: number }) => state.miDato);

  console.log(miDato)

  return (
   
      <View style={{ flex: 1, alignItems: "center", paddingTop: 30 }}>
        <Header />

        <Center sx={{ height: 580, width: 370 }}>
          {miDato === 0 ? <FirstTrip /> : <WatchTrips />}

        </Center>
      </View>
   
  );
}
