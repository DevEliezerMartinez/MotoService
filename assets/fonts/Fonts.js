import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    MontserratThin: require("./../../assets/fonts/Montserrat/static/Montserrat-Thin.ttf"),
    MontserratSemi: require("./../../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratItalic: require("./../../assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf"),
    // Agrega otras variaciones de Montserrat aquí
    PoppinsRegular: require("./../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsItalic: require("./../../assets/fonts/Poppins/Poppins-Italic.ttf"),
    PoppinsBold: require("./../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    // Agrega otras variaciones de Poppins aquí
  });
};
