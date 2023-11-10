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
/* import * as SQLite from "expo-sqlite"; */


/* function openDatabase() {
  const db = SQLite.openDatabase("motoDB.db");
  return db;
}

const db = openDatabase();
 */
export default function firstTrip() {
  const [showModal, setShowModal] = useState(false);
  const [showDateText, setShowDateText] = useState(false); // State variable to control the visibility of "fechaR" text
  const [showButtonDate, setButtonDate] = useState(true); // State variable to control the visibility of "fechaR" text

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);


  
  const [destine, setDestine] = useState("");
  const [km, setKm] = useState("");
/*   const [dateTrip, setDateTrip] = useState("");
  const [notes, setNotes] = useState("");
  const [id, setId] = useState(1);
 */




  //base de datos:
 /*  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists viajes (Destino text, Km text);"
      );
    });
  }, []);
 */

  

  const onSubmit = () => {
    setShowModal(false);
    const formData = {
      destine,
      km,
    };
   /*  db.transaction((tx) => {
      tx.executeSql(
        "insert into viajes (Destino,Km) values (?, ?)",
        [ destine,km],
       
      );
    }); */
    console.log("Datos:", formData);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    console.log(typeof currentDate);
    setShow(false);
    setDate(currentDate);
    // Update the state variable to show "fechaR" text
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
          onPress={() => setShowModal(true)}
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
                <Button size="sm" variant="outline" action="secondary">
                  <ButtonText>
                    <Text style={commonStyles.fontStyle3}>
                      Seleccione una imagen
                    </Text>
                  </ButtonText>
                </Button>

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

                {/*  <Button onPress={showTimepicker}  ><ButtonText>show time</ButtonText></Button> */}

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    onChange={onChange}
                    mode="date"
                    display="calendar"
                  />
                )}

                {/* Conditionally render the "fechaR" text element based on the "showDateText" state variable */}
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

                {/* Conditionally render the "fechaR" text element based on the "showDateText" state variable */}
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
                  <TextareaInput placeholder="Agrega una breve descripción o algo que quieras recordar" />
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
