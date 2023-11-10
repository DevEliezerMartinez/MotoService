import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../../components/Themed";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta

import { Link } from "expo-router";
import { StyleSheet } from "react-native";

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

const Header = () => {
  return (
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
                uri: "https://images.pexels.com/photos/18971921/pexels-photo-18971921/free-photo-of-man-in-helmet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
          </Avatar>
        </HStack>
        <VStack sx={{ padding: 20 }}>
          <Text style={commonStyles.fontStyle4}>
            Toda la informacion sobre tus viaje
          </Text>

          
      

        </VStack>
      </View>
  )
}

export default Header