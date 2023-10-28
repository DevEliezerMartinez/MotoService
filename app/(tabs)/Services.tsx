import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Avatar, HStack, VStack } from "@gluestack-ui/themed";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta
import { loadFonts } from "../../assets/fonts/Fonts"; // Importa la función de carga de fuentes
import { useEffect } from "react";

export default function TabTwoScreen() {
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

      <Text style={commonStyles.fontStyle1}>Texto pestsaña Servicios</Text>
      <Text style={commonStyles.fontStyle2}>Textoo</Text>
      <Text style={commonStyles.fontStyle3}>Textoo</Text>
      <Text style={commonStyles.fontStyle4}>Textoo</Text>

      <VStack space="2xl">
        <HStack space="md">
          <Avatar bgColor="$indigo600">
          </Avatar>
        </HStack>
      </VStack>
    </View>
  );
}
