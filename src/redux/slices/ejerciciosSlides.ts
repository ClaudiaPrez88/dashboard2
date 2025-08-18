import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const PLACEHOLDER_IMAGE = "/images/placeholder.png"; // ruta local a imagen por defecto

// Fetch de ejercicios desde API pública
export const fetchEjercicios = createAsyncThunk(
  'ejercicios/fetchEjercicios',
  async () => {
    const response = await axios.get('https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/ejercicios/ejercicios')
    return response.data.items // 👈 Solo devolvemos el array
  }
)

interface Ejercicios {
  id: number
  titulo: string
  descripcion: string
  imagen: string | null
  contenido:string
  duracion:number
  rating:number
}

interface EjerciciosState {
  lista: Ejercicios[]
  loading: boolean
  error: string | null
}

const initialState: EjerciciosState = {
  lista: [],
  loading: false,
  error: null,
}

const EjerciciosSlice = createSlice({
  name: 'ejercicios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEjercicios.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEjercicios.fulfilled, (state, action) => {
        state.loading = false
        // Asegurar que imagen siempre tenga valor válido
        state.lista = action.payload.map((doc: Ejercicios) => ({
          ...doc,
          imagen: doc.imagen ? doc.imagen : PLACEHOLDER_IMAGE,
        }))
      })
      .addCase(fetchEjercicios.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Error al obtener Ejercicios'
      })
  },
})

export default EjerciciosSlice.reducer