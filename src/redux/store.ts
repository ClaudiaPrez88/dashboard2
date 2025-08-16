import { configureStore } from '@reduxjs/toolkit'
import doctoresReducer from '../redux/slices/DoctoresSlices'
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    doctores: doctoresReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

