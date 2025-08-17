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

// ✅ Thunk para eliminar un mensaje
export const deleteMessage = createAsyncThunk(
  "chat/deleteMessage",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/chat", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error al eliminar mensaje");
      }
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk para traer mensajes del usuario para la lista
export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async () => {
    const res = await fetch("/api/chat");
    if (!res.ok) throw new Error("Error al traer mensajes");
    const data = await res.json();

    const userMessages = data.items
      .filter((msg: any) => msg.role === "user")
      .sort(
        (a: any, b: any) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

    return userMessages.map((msg: any) => ({
      id: msg.id,
      text: msg.text,
    }));
  }
);

// Nuevo thunk para traer los mensajes del user y bot
export const fetchMessagesByChat = createAsyncThunk(
  "chat/fetchMessagesByChat",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/chat?d=${id}`);
      if (!res.ok) throw new Error("Error al traer mensajes del chat");
      const data = await res.json();
      return data.items; // asumimos que vienen todos los mensajes del chat
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

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
      // Traer mensajes
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<ChatItem[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error desconocido";
      })

      // Eliminar mensaje
      .addCase(deleteMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMessage.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((msg) => msg.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Error al eliminar mensaje";
      });
  },
});

export default chatSlice.reducer;
