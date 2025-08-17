import { configureStore } from '@reduxjs/toolkit'
import doctoresReducer from '../redux/slices/DoctoresSlices'
import userReducer from './slices/userSlice';
import chatReducer from "./slices//chatSlice";

export const store = configureStore({
  reducer: {
    doctores: doctoresReducer,
    user: userReducer,
    chat: chatReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

