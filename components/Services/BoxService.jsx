import { View, Text } from "../../components/Themed";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  Box,
  Divider,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@gluestack-ui/themed";
import { Pressable } from "react-native";

const ComponentCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
 /*  console.log(showModal); */

  const PressIn = () => {
    setShowModal(true);
  };

  return (
    <>
      <Pressable
        style={{
          backgroundColor: "#1E1E1E",
          marginVertical: 10,
          padding: 15,
          borderRadius: 8,
        }}
        onLongPress={PressIn}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "MontserratSemibold",
          }}
        >
          Servicio #{data.id}
        </Text>

        <Box
          sx={{
            backgroundColor: "#0ADD12",
            width: 125,
            padding: 3,
            right: -200,
            top: -40,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "MontserratSemibold",
              textAlign: "center",
            }}
          >
            {data.status}
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "MontserratSemibold",
              textAlign: "center",
              color: "#979292",
            }}
          >
            {data.descripcion}
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "MontserratSemibold",
              textAlign: "center",
              color: "#979292",
            }}
          >
            {data.fecha}
          </Text>
        </Box>
      </Pressable>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop sx={{ backgroundColor: "#000000" }} />
        <ModalContent
          sx={{ backgroundColor: "rgba(25, 25, 25, 1),", paddingVertical: 11 }}
        >
          <ModalHeader>
            <Text
              style={{
                fontFamily: "MontserratSemibold",
                color: "white",
                fontSize: 20,
              }}
            >
              Servicio #1
            </Text>
          </ModalHeader>
          <ModalBody>
            <Text
              style={{
                fontFamily: "MontserratSemibold",
                color: "#979292",
                fontSize: 16,
              }}
            >
              {" "}
              30/05/2023
            </Text>

            <Divider sx={{ marginVertical: 10 }} />

            <Box id="lista">
              {[{ key: "Faros" }, { key: "aceite" }, { key: "Cadena" }].map(
                (item, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 14,
                      fontFamily: "MontserratSemibold",
                      color: "#979292",
                    }}
                  >{`\u2022 ${item.key}`}</Text>
                )
              )}
            </Box>

            <Text
              style={{
                marginVertical: 10,
                fontSize: 18,
                fontFamily: "MontserratSemibold",
              }}
            >
              Total:$720
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 14,
                fontFamily: "MontserratRegular",
              }}
            >
              En este servicio cambie mis frenos porque se cristalizaban y aún
              no descubro el porque de las explociones
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComponentCard;

export const commonStyles = StyleSheet.create({
  fontStyle1: {
    fontSize: 17,
    fontFamily: "MontserratThin",
  },
  fontStyle2: {
    fontSize: 20,
    fontFamily: "MontserratRegular",
  },
  fontStyle3: {
    fontSize: 16,
    fontFamily: "MontserratSemibold",
  },
  input: {
    /*    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10, */
    color: "white",
    fontFamily: "MontserratRegular", // Reemplaza 'YourChosenFont' con el nombre de tu fuente
  },
});
