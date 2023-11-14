// store.js
import { configureStore } from '@reduxjs/toolkit';
import miReducer from './slice';

const store = configureStore({
  reducer: {
    miDato: miReducer,
  },
});

export default store;
