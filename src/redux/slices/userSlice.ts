import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type UserType = {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string | null;
  pais: string;
  ciudad: string;
  codigo_postal?: string | null;
  foto?: string | null;
  anio_creacion?: number | null;
};

type UserState = {
  user: UserType | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk para traer usuario
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch(
    "https://g0818aead2485ee-instanciaagosto.adb.us-phoenix-1.oraclecloudapps.com/ords/wks_agosto/usuarios/usuarios"
  );
  const data = await res.json();
  return data.items[0];
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error al cargar usuario";
      });
  },
});

export default userSlice.reducer;


