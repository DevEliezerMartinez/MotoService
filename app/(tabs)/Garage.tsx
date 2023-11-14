import { Image, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import {
  Avatar,
  Button,
  ButtonText,
  HStack,
  Spinner,
  VStack,
} from "@gluestack-ui/themed";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta
import { loadFonts } from "../../assets/fonts/Fonts"; // Importa la función de carga de fuentes
import { useEffect, useState } from "react";
import { Text } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";

export default function Trip() {
  const [image, setImage] = useState("");
  const miDato = useSelector((state: { miDato: number }) => state.miDato);

  const handleIncrementar = () => {
   
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("funcion");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    /* console.log("---",result.assets);
     */

    if (!result.canceled) {
      console.log("resultado", result.assets[0].uri);

      setImage(result.assets[0].uri);
    }
  };

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

      <VStack space="2xl">
        <HStack space="md">
          <Avatar bgColor="$indigo600"></Avatar>

          <View>
            <Text>Valor actual: {miDato}</Text>
            <Button  onPress={handleIncrementar} ><ButtonText>Incrementar</ButtonText></Button>
          </View>

          <Button onPress={pickImage}>
            <ButtonText>seleccionar imagen</ButtonText>
          </Button>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </HStack>
      </VStack>
    </View>
  );
}
