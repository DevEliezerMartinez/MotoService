import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Header from "../../../components/trip/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading } from "@gluestack-ui/themed";

const settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Link  href="/(tabs)/trips" style={{ color: "white", backgroundColor: "blue" }}>
          Volver al inicio
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    padding:20
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
