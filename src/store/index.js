import { configureStore } from '@reduxjs/toolkit'
// import contadorReducer from '../reducer/contadorReducer';
import { counterSlice } from '../reducerConSlice/contadorSlice';

const store = configureStore({
  reducer: {
    // contador : contadorReducer
    contador: counterSlice
  }
})

export default store;