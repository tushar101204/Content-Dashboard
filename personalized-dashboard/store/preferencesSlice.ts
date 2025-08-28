import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
  categories: string[];
  darkMode: boolean;
}

const initialState: PreferencesState = {
  categories: [],
  darkMode: false,
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
    },
  },
});

export const { setCategories, toggleDarkMode, setDarkMode } = preferencesSlice.actions;
export default preferencesSlice.reducer;
