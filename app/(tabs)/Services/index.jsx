import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import {
  Avatar,
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  HStack,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import Header from "../../../components/Services/Header";
import BoxService from "../../../components/Services/BoxService";
import { useState } from "react";
import Modal from "../../../components/Services/FormularioModal";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { update } from "../../../src/sliceServices"; // Ajusta la ruta a tu archivo miSlice


export default function TabTwoScreen() {
  const [Vacio, setSetVacio] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const counterValue = useSelector((state) => state.listServices.counter);



  
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  let data = [
    {
      id: 1,
      status: "Hecho",
      descripcion: "Cambio de aceite, bujias ...",
      fecha: "2023-15-10",
    },
    {
      id: 2,
      status: "Pendiente",
      descripcion: "frenos, balancines ...",
      fecha: "2023-15-10",
    },
    {
      id: 3,
      status: "Proximo",
      descripcion: "Cambio de aceite, bujias 3",
      fecha: "2023-15-03",
    },
    {
      id: 4,
      status: "Hecho",
      descripcion: "frenos, balancines 4",
      fecha: "2023-15-04",
    },
  
  
  ];

  return (
    <View style={commonStyles.container}>
      <Header />


      <View style={commonStyles.miniContainer}>
        <Center>
          <Image
            source={require("../../../assets/images/150z.png")}
            alt="imagen-destino"
            style={{
              height: 200,
              resizeMode: "cover",
              borderRadius: 3,
            }}
          />
        </Center>

        <Center sx={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MontserratSemibold",
              textAlign: "center",
            }}
          >
            ITALIKA 150Z - 2023
          </Text>
        </Center>

        <Divider
          sx={{
            bg: "#6E6E6E",
            marginVertical: 10,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontFamily: "MontserratRegular",
            textAlign: "center",
          }}
        >
          Historial de servicioos
        </Text>
        
        {!counterValue ? <ContainerVacio /> : <ContainerScroll data={data} />}

        <Modal status={openModal} onClose={handleCloseModal} />

        <Pressable
          onPress={handleOpenModal}
          style={{
            padding: 8,
            backgroundColor: "#066AFF",
            borderRadius: 32,
            marginTop: 1,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MontserratSemibold",
              textAlign: "center",
            }}
            data
          >
            Agendar Servicio
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const ContainerScroll = ({ data }) => (
  <ScrollView sx={{marginTop: 10, height: 230}}>
    {data.map((item) => (
      <BoxService key={item.id} data={item} />
    ))}
  </ScrollView>
);

const ContainerVacio = () => (
  <View style={{ marginVertical: 100 }}>
    <Text style={commonStyles.fontStyle4}>
      Registra los servicios, empieza dando click!
    </Text>
  </View>
);




const commonStyles = StyleSheet.create({
  // Estilos de fuente numerados
  container: {
    flex: 1,
    paddingTop: 25,
    padding: 10,
  },

  miniContainer: {
    /* borderWidth: 1,
    borderColor: "red", */
    paddingHorizontal: 15,
  },
  fontStyle1: {
    fontSize: 20,
    fontFamily: "MontserratRegular",
    textAlign: "center",
  },
  fontStyle2: {
    fontSize: 20,
    fontFamily: "MontserratSemibold",
    textAlign: "center",
  },
  fontStyle3: {
    fontSize: 16,
    fontFamily: "MontserratThin",
    textAlign: "center",
  },
  fontStyle4: {
    fontSize: 14,
    fontFamily: "MontserratSemibold",
    textAlign: "center",
  },
});
