// miSlice.js
import { createSlice } from "@reduxjs/toolkit";

const miSlice = createSlice({
  name: "contador",
  initialState: 0,/* {
    contador: 0,
    valorComponente: false,
  }, */
  reducers: {
    actualizarDato: (state) => {
      return state + 1; // Sumar +1 al estado actual
    },
   /*  toogleServicio: (state) => {
      return {
        toogleServicio: !state.valorComponente,
      };
    }, */
  },
});

export const { actualizarDato /* toogleServicio */ } = miSlice.actions;
export default miSlice.reducer;
