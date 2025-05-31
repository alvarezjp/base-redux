import { configureStore } from '@reduxjs/toolkit'
// import contadorReducer from '../reducer/contadorReducer';
import { counterSlice } from '../reducerConSlice/contadorSlice';


// ---------------- Esto es el STORE -----------------

const store = configureStore({
  reducer: {
    // contador : contadorReducer,
    contador: counterSlice.reducer
  }
})

export default store;