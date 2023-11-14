import {
  Box,
  Button,
  ButtonText,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { Text, View } from "../../components/Themed";
import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../lib/supabase";
import { actualizarDato } from "../../src/slice";
import { useDispatch, useSelector } from 'react-redux';




export default function firstTrip() {
  const dispatch = useDispatch();

  
  const [showModal, setShowModal] = useState(false);
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
  const [showBtnImage, setshowBtnImage] = useState(true)
  const [showTitleImage, setshowTitleImage] = useState(false)


  const [image, setImage] = useState("");
  

  const onSubmit = async () => {
    setShowModal(false);
    dispatch(actualizarDato());

    const formData = {
      destine,
      km,
      dateTrip,
      notes,
      image
    };

    let some = JSON.stringify(formData.dateTrip);
    let dateParsed = some.slice(1, 11);

    const { error } = await supabase
      .from("viajes")
      .insert({
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
  };

  const handleDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDateTrip(currentDate);
    setShow(false);
    setDate(currentDate);
    setShowDateText(true);
    setButtonDate(false);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("funcion")
    setshowBtnImage(false)
    setshowTitleImage(true)
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


  

  const ref = React.useRef(null);

  return (
    <View>
      <Center>
        <Image
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
            marginVertical: 40,
          }}
          source={require("../../assets/images/trip.png")}
        />

        <Text style={commonStyles.fontStyle2}>
          Ups!, aún no hay ningun viaje.
        </Text>

        <Button
          onPress={() => {
            showModal == true ? setShowModal(false) : setShowModal(true);
          }}
          ref={ref}
          sx={{ marginTop: 20 }}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Agregar </ButtonText>
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          finalFocusRef={ref}
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
                


                {showBtnImage&& (<>

                  <Button size="sm" variant="outline" action="secondary" onPress={pickImage}>
                  <ButtonText>
                    <Text style={commonStyles.fontStyle3}>
                      Seleccione una imagen
                    </Text>
                  </ButtonText>
                </Button>
                
                
                </>)}


                {showTitleImage&&(<>

                <Text style={commonStyles.fontStyle2}>Imagen seleccionada</Text>

                
                
                </>)}

                <Input variant="underlined" size="md">
                  <InputField
                    onChangeText={(text) => setDestine(text)}
                    placeholder="Destino"
                    sx={{ color: "$white" }}
                  />
                </Input>

                <Input variant="underlined" size="md">
                  <InputField
                    onChangeText={(text) => setKm(text)}
                    placeholder="Km del viaje"
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

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </View>
  );
}

const commonStyles = StyleSheet.create({
  // Estilos de fuente numerados
  container: {
    flex: 1,
  },
  fontStyle2: {
    fontSize: 16,
    fontFamily: "MontserratSemibold",
    textAlign: "center",
  },
  fontStyle3: {
    fontSize: 16,
    fontFamily: "MontserratThin",

    textAlign: "center",
  },
});
