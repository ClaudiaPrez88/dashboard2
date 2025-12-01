import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { supabase } from '@/supabaseClient';

const PLACEHOLDER_IMAGE = "/images/placeholder.png"; // ruta local a imagen por defecto

// Fetch de doctores (usuarios) desde API pública
export const fetchDoctores = createAsyncThunk(
  'doctores/fetchDoctores',
   async () => {
    const { data, error } = await supabase
      .from('doctores') // 👈 nombre de tu tabla en Supabase
      .select('*')

    if (error) throw error

    return data
  }
)

interface Doctor {
  id: number
  nombre: string
  profesion: string
  descripcion: string
  imagen_url: string | null
  precio_consulta: number
}

interface DoctoresState {
  lista: Doctor[]
  loading: boolean
  error: string | null
}

const initialState: DoctoresState = {
  lista: [],
  loading: false,
  error: null,
}

const doctoresSlice = createSlice({
  name: 'doctores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctores.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDoctores.fulfilled, (state, action) => {
        state.loading = false
        // Asegurar que imagen_url siempre tenga valor válido
        state.lista = action.payload.map((doc: Doctor) => ({
          ...doc,
          imagen_url: doc.imagen_url ? doc.imagen_url : PLACEHOLDER_IMAGE,
        }))
      })
      .addCase(fetchDoctores.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Error al obtener doctores'
      })
  },
})

export default doctoresSlice.reducer
