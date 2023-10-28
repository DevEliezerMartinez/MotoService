import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../../components/Themed";
import { useState } from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Center,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta
import FirstTrip from '../../components/trip/firstTrip'
import WatchTrips from '../../components/trip/WatchTrips'
export default function TabOneScreen() {
  const [trip, SetTrip] = useState(0);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HStack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={styles.title}>Mis viajes</Text>
          <Avatar>
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
        </HStack>
        <VStack sx={{ padding: 20 }}>
          <Text style={commonStyles.fontStyle4}>
            Toda la informacion sobre tus viajes
          </Text>

          
          <Center>
          {trip === 0 ? <FirstTrip /> : <WatchTrips />}

          </Center>
          
        </VStack>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
