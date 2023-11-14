// miSlice.js
import { createSlice } from '@reduxjs/toolkit';

const miSlice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    actualizarDato: (state) => {
      return state + 1; // Sumar +1 al estado actual
    },
  },
});

export const { actualizarDato } = miSlice.actions;
export default miSlice.reducer;
