// store.js
import { configureStore } from '@reduxjs/toolkit';
import miReducer from './slice';
import listServices from './sliceServices';

const store = configureStore({
  reducer: {
    miDato: miReducer,
    listServices: listServices,
  },
});

export default store;
