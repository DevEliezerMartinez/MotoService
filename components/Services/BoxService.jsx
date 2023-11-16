import { View, Text } from "../../components/Themed";
import React, { useState } from "react";
import { Box } from "@gluestack-ui/themed";
import { Pressable } from "react-native";

const ComponentCard = ({ data }) => {

  const PressIn=()=>{
    console.log("wow")

  }
  return (
    <>
     
        <Pressable
          style={{
            backgroundColor: "#1E1E1E",
           marginVertical:10,
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
      
    </>
  );
};

export default ComponentCard;
