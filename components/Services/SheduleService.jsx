import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SheduleService() {
  // states for datepicker
  const [date, setDate] = useState(new Date());
  const [showButtonDate, setButtonDate] = useState(true);
  const [mode, setMode] = useState("date");
  const [showDateText, setShowDateText] = useState(false);
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    let adi = currentDate;
    adi = JSON.stringify(adi);
    adi = adi.slice(1, 11);
    console.log(adi);

    setShow(false);
    setDate(adi);
    setShowDateText(true);
    setButtonDate(false);
  };

  //end dates

  //state inputs
  const [detalles, setDetalles] = useState("");

  const handleSubmit = () => {
    console.log("Envio de formulario:",detalles,"&",date)
  };
  return (
    <Center>
      <Box
        id="fecha"
        sx={{
          marginVertical: 30,
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
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
          <Text
            id="fechaR"
            style={{ fontFamily: "MontserratRegular", color: "white" }}
          >
            Fecha: {date.toLocaleString()}
          </Text>
        )}
      </Box>

      <Textarea size="md" w="$64">
        <TextareaInput
        sx={{color: "white"}}
          onChangeText={(text) => setDetalles(text)}
          role="document"
          placeholder="Añade mas detalles para recordar..."
        />
      </Textarea>

      <Button
        onPress={handleSubmit}
        action="secondary"
        sx={{
          marginTop: 10,
          marginHorizontal: 40,
          backgroundColor: "#06FF10",
        }}
      >
        <ButtonText> Guardar</ButtonText>
      </Button>
    </Center>
  );
}

const styles = StyleSheet.create({});
