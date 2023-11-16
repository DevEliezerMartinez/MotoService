import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: false,
};

export const listServices = createSlice({
  name: "servicesList", // Cambié el nombre del slice a "userList" para mayor claridad
  initialState,
  reducers: {
    update: (state, action) => {
        // Si action.payload es un valor booleano, asigna ese valor directamente
        // De lo contrario, invierte el valor actual de state.counter
        state.counter =true
      },
      deletee: (state) => {
        state.counter = null;
      },
  },
});

export const { update, deletee } = listServices.actions; // Corregí los nombres de las acciones

export default listServices.reducer;
