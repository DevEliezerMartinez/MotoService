import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  // Estilos de fuente numerados
  fontStyle1: {
    fontSize: 20,
    fontFamily: 'MontserratThin'
  },
  fontStyle2: {
    fontSize: 20,
    fontFamily: 'MontserratSemibold',
  },
  fontStyle3: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
  },
  fontStyle4: {
    fontSize: 20,
    fontFamily: 'PoppinsLight'
  },
});

