import { Text, View } from "../Themed";
import { supabase } from "../../lib/supabase";
import React, { useState, useEffect } from "react";
import {
  Box,
  ScrollView,
  Image,
  Spinner,
  Fab,
  FabIcon,
  Modal,
  ModalBackdrop,
  ModalBody,
  Button,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  Center,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { FabLabel } from "@gluestack-ui/themed";
import { AddIcon } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { ModalHeader } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";

const WatchTrips = () => {
  const [resultados, setResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState();
  const [totalKilometros, setTotalKilometros] = useState(0); // Nuevo estado para el total de kilómetros
  const [refreshData, setRefreshData] = useState(false);


  //modal
  const [showDateText, setShowDateText] = useState(false);
  const [showButtonDate, setButtonDate] = useState(true);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [destine, setDestine] = useState("");
  const [km, setKm] = useState("");
  const [dateTrip, setDateTrip] = useState("");
  const [notes, setNotes] = useState("");

  // boton de imagen
  const [showBtnImage, setshowBtnImage] = useState(true);
  const [showTitleImage, setshowTitleImage] = useState(false);

  const [image, setImage] = useState("");

  //end modal

  const onSubmit = async () => {
    setShowModal(false);
    

    const formData = {
      destine,
      km,
      dateTrip,
      notes,
      image,
    };

    let some = JSON.stringify(formData.dateTrip);
    let dateParsed = some.slice(1, 11);

    const { error } = await supabase.from("viajes").insert({
      fotografia: image,
      destino: destine,
      km_viaje: km,
      fecha: dateParsed,
      notas: notes,
    });

    if (error) {
      console.log("true");
      console.log(error);
    }
    setRefreshData(true);

  };

  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateTrip(currentDate);
    setShow(false);
    setDate(currentDate);
    setShowDateText(true);
    setButtonDate(false);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("funcion");
    setshowBtnImage(false);
    setshowTitleImage(true);
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
    const getTrips = async () => {
      try {
        const { data, error, status } = await supabase
          .from("viajes")
          .select(`id_viaje, fecha, destino, fotografia, km_viaje`);

        if (error) {
          console.log("Error al obtener datos:", error);
        } else {
          const formattedData = data.map((item) => ({
            ...item,
            fecha: formatFecha(item.fecha),
          }));

          setResultados(formattedData);
          // Calcular la sumatoria de km_viaje
          const total = formattedData.reduce(
            (accumulatedTotal, currentItem) =>
              accumulatedTotal + parseFloat(currentItem.km_viaje),
            0
          );
          setTotalKilometros(total);

          setIsLoading(false);
          setRefreshData(false);

        }
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    };

    getTrips();
  }, [refreshData]);

  const formatFecha = (fecha) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(fecha);
    return date.toLocaleDateString("es-ES", options);
  };

  const openModalForm = () => {
    // Restablecer estados relacionados con la imagen y la fecha al abrir el modal
  setshowBtnImage(true);
  setshowTitleImage(false);
  setShow(false);
  setButtonDate(true);
  setDate(new Date());
  setShowDateText(false)

  showModal == true ? setShowModal(false) : setShowModal(true);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <Text style={commonStyles.fontStyle2}>Cargando...</Text>
          <Spinner size="large" />
        </>
      );
    }

    return (
      <View>
        <ScrollView>
          {resultados.map((item) => (
            <Box
              key={item.id_viaje}
              sx={{
                marginTop: 30,
                borderColor: "#696767",
                borderWidth: 0.5,
                padding: 3,
                borderRadius: 5,
                width: "$80",
              }}
            >
              <Image
                source={{ uri: item.fotografia }}
                alt="imagen-destino"
                role="img"
                style={{ width: "auto", height: 150, resizeMode: "cover" }}
              />

              <Box sx={{ padding: 10, gap: 10 }}>
                <Text style={commonStyles.fontStyle1}>{item.fecha}</Text>
                <Text style={commonStyles.fontStyle2}>{item.destino}</Text>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "$full",
                  alignItems: "flex-end",
                  padding: 5,
                }}
              >
                <Text style={commonStyles.fontStyle1}>{item.km_viaje}km</Text>
              </Box>
            </Box>
          ))}

          <Box
            id="textos"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text style={commonStyles.fontStyle1}>
              En total has recorrido un total de:
            </Text>
            <Text style={commonStyles.fontStyle3} id="total">
              {totalKilometros} km
            </Text>
          </Box>
        </ScrollView>

        <Fab size="lg" onPress={openModalForm} sx={{ right: -25 }}>
          <FabIcon as={AddIcon} padding={1} />
        </Fab>

        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <ModalBackdrop />
          <ModalContent sx={{ backgroundColor: "#3B3B3B", height: "$3/4" }}>
            <ModalHeader>
              <Text style={commonStyles.fontStyle2}>Registro de viaje:</Text>
            </ModalHeader>
            <ModalBody>
              <Box
                sx={{
                  marginVertical: 30,
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                {showBtnImage && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      action="secondary"
                      onPress={pickImage}
                    >
                      <ButtonText>
                        <Text style={commonStyles.fontStyle3}>
                          Seleccione una imagen
                        </Text>
                      </ButtonText>
                    </Button>
                  </>
                )}

                {showTitleImage && (
                  <>
                    <Text style={commonStyles.fontStyle2}>
                      Imagen seleccionada
                    </Text>
                  </>
                )}

                <Input variant="underlined" size="md">
                  <InputField
                    onChangeText={(text) => setDestine(text)}
                    placeholder="Destino"
                    sx={{ color: "$white" }}
                  />
                </Input>

                <Input variant="underlined" size="md">
                  <InputField
                    onChangeText={(text) => {
                      // Validar que solo se ingresen números
                      const numericValue = text.replace(/[^0-9]/g, "");
                      setKm(numericValue);
                    }}
                    placeholder="Km del viaje"
                    keyboardType="numeric"
                    sx={{ color: "$white" }}
                  />
                </Input>

                <Text style={commonStyles.fontStyle2}>Fecha</Text>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    onChange={handleDate}
                    mode="date"
                    display="calendar"
                  />
                )}

                {showButtonDate && (
                  <Button
                    size="md"
                    variant="outline"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={showDatepicker}
                  >
                    <ButtonText>Seleccionar fecha</ButtonText>
                  </Button>
                )}

                {showDateText && (
                  <Text id="fechaR" style={commonStyles.fontStyle3}>
                    Fecha de viaje: {date.toLocaleString()}
                  </Text>
                )}

                <Text style={commonStyles.fontStyle2}>Notas del viaje</Text>

                <Textarea
                  size="md"
                  isReadOnly={false}
                  isInvalid={false}
                  isDisabled={false}
                  w="$64"
                >
                  <TextareaInput
                    onChangeText={(text) => setNotes(text)}
                    sx={{ color: "$white" }}
                    placeholder="Agrega una breve descripción o algo que quieras recordar"
                    role="document"
                  />
                </Textarea>
              </Box>
              <Center>
                <Button
                  id="envioData"
                  size="sm"
                  action="positive"
                  borderWidth="$0"
                  /* onPress={() => {
                      setShowModal(false);
                    }} */
                  onPress={onSubmit}
                >
                  <ButtonText>Guardar</ButtonText>
                </Button>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </View>
    );
  };

  return renderContent();
};

export default WatchTrips;

export const commonStyles = StyleSheet.create({
  fontStyle1: {
    fontSize: 17,
    fontFamily: "MontserratThin",
  },
  fontStyle2: {
    fontSize: 20,
    fontFamily: "MontserratSemibold",
  },
  fontStyle3: {
    fontSize: 16,
    fontFamily: "MontserratSemibold",
  },
});
