import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  items: any[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<any>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    setFavorites(state, action: PayloadAction<any[]>) {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
