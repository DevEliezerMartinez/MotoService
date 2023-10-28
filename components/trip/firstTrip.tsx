import {
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  CopyIcon,
  Divider,
  HStack,
  Image,
  VStack,
} from "@gluestack-ui/themed";
import { Text, View } from "../../components/Themed";
import React from "react";
import Imagen from "../../assets/images/trip.png";
import { commonStyles } from "../../assets/commonStyles"; // Asegúrate de que la ruta sea correcta

export default function firstTrip() {


  const handleClick=()=>{

    console.log("first")
  }

  return (
    <View>
      <Center>
        <Image
          sx={{ marginVertical: "$8" }}
          alt="Icon"
          size="2xl"
          borderRadius={10}
          source={Imagen}
        />

        <Text style={commonStyles.fontStyle2}>
          Ups!, aún no hay ningun viaje.
        </Text>

        <Button 
        sx={{marginTop: 10}}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={handleClick}

          
        >
          <ButtonText>Añadir </ButtonText>
          
        </Button>
      </Center>
    </View>
  );
}
