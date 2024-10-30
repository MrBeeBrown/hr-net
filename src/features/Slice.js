import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../data/db';

export const loadItems = createAsyncThunk('items/loadItems', async () => {
  const items = await db.items.toArray();
  return items;
});

export const addItemToDB = createAsyncThunk('items/addItemToDB', async (item) => {
  const id = await db.items.add(item);
  return { ...item, id };
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    clearItems: (state) => {
      return [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addItemToDB.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const { clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;
