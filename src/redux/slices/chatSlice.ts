// store/chatSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type ChatItem = {
  id: number;
  text: string;
};

type ChatState = {
  items: ChatItem[];
  loading: boolean;
  error: string | null;
};

// Async thunk para traer mensajes desde la API
export const fetchMessages = createAsyncThunk("chat/fetchMessages", async () => {
  const res = await fetch("/api/chat");
  if (!res.ok) throw new Error("Error al traer mensajes");
  const data = await res.json();
  
    // Ordenamos los mensajes por created_at (más recientes primero)
   const userMessages = data.items
    .filter((msg: any) => msg.role === "user")
    .sort((a: any, b: any) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  // Ajusta según la estructura de tu API
  return userMessages.map((msg: any) => ({
    id: msg.id,
    text: msg.text,
  }));
});

const initialState: ChatState = {
  items: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action: PayloadAction<ChatItem[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error desconocido";
      });
  },
});

export default chatSlice.reducer;
