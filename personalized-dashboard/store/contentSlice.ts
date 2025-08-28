import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentState {
  news: any[];
  movies: any[];
  socialPosts: any[];
}

const initialState: ContentState = {
  news: [],
  movies: [],
  socialPosts: [],
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<any[]>) {
      state.news = action.payload;
    },
    setMovies(state, action: PayloadAction<any[]>) {
      state.movies = action.payload;
    },
    setSocialPosts(state, action: PayloadAction<any[]>) {
      state.socialPosts = action.payload;
    },
  },
});

export const { setNews, setMovies, setSocialPosts } = contentSlice.actions;
export default contentSlice.reducer;
