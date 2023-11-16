import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonText,
  Center,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  VStack,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegisterService() {
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
  const [Costo, setCosto] = useState("");

  const [values, setValues] = useState([]);

  const handleSubmit = () => {
    console.log("Envio de formulario detalles:", detalles);
    console.log("Envio de formulario Costo:", Costo);
    console.log("Envio de formulario date:", date);
    console.log("Envio de formulario array:", values);
  };

  return (
    <View>
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

      <Box id="checkboxes">
        <Text
          style={{
            fontFamily: "MontserratRegular",
            color: "white",
            fontSize: 18,
            padding: 10,
          }}
        >
          Basicos
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false} // Opcional: Para ocultar la barra de desplazamiento horizontal
        >
          <CheckboxGroup
            value={values}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
            onChange={(keys) => {
              setValues(keys);
            }}
          >
            <Checkbox value="Aceite">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Aceite
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Bujias">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Bujias
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Revisión de cadena">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Rev. cadena
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Anticogelante">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Anticogelante
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Filtro de Aire">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Filtro Aire
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>
          </CheckboxGroup>
        </ScrollView>
      </Box>
      <Box id="checkboxes2">
        <Text
          style={{
            fontFamily: "MontserratRegular",
            color: "white",
            fontSize: 18,
            padding: 10,
          
          }}
        >
          Extras
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false} // Opcional: Para ocultar la barra de desplazamiento horizontal
        >
          <CheckboxGroup
            value={values}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
            onChange={(keys) => {
              setValues(keys);
            }}
          >
            <Checkbox value="Luces">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Luces
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Frenos">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Frenos
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Revisión de bateria">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Rev. bateria
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Llantas">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Llantas
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>

            <Checkbox value="Claxon">
              <CheckboxIndicator
                sx={{
                  width: 100,
                  height: 35,
                  backgroundColor: "#0E8AE5",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckboxLabel>
                  <Text
                    style={{
                      fontFamily: "MontserratSemibold",
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Claxon 
                  </Text>
                </CheckboxLabel>
              </CheckboxIndicator>
            </Checkbox>
          </CheckboxGroup>
        </ScrollView>
      </Box>

      <Box sx={{ display: "flex", gap: 30, paddingHorizontal: 10 , marginVertical:20}}>
        <Input variant="underlined" size="md">
          <InputField
            sx={{ color: "white" }}
            onChangeText={(text) => setCosto(text)}
            placeholder="Costo total"
            keyboardType="numeric"
          />
        </Input>

        <Textarea size="md">
          <TextareaInput
            onChangeText={(text) => setDetalles(text)}
            sx={{ color: "white" }}
            size="sm"
            role="document"
            placeholder="Añade mas detalles..."
          />
        </Textarea>

        <Button
          action="secondary"
          onPress={handleSubmit}
          sx={{
            marginTop: 10,
            marginHorizontal: 40,
            backgroundColor: "#06FF10",
          }}
        >
          <ButtonText> Guardar</ButtonText>
        </Button>
      </Box>
    </View>
  );
}

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
