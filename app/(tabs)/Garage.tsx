import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { Avatar, HStack, Spinner, VStack } from "@gluestack-ui/themed";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta
import { loadFonts } from "../../assets/fonts/Fonts"; // Importa la función de carga de fuentes
import { useEffect } from "react";
import { Text } from "@gluestack-ui/themed";

export default function Trip() {
  useEffect(() => {
    // Carga las fuentes al inicio del componente
    loadFonts();
  }, []); // Asegúrate de ejecutarlo solo una vez al montar el componente

  return (
    <View style={commonStyles.container}>
      <View
        style={commonStyles.container}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/*  <Text style={commonStyles.fontStyle1}>Textoo Garage</Text>
      <Text style={commonStyles.fontStyle2}>Textoo</Text> */}

      <Spinner size="small" />
      <Text>klasjhjdalksidhjaslkih</Text>

      <VStack space="2xl">
        <HStack space="md">
          <Avatar bgColor="$indigo600"></Avatar>
        </HStack>
      </VStack>
    </View>
  );
}