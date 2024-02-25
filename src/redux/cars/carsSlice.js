import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { LoadMoreAdverts } from './actions';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    selectedAdvert: null,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
      })
      .addCase(LoadMoreAdverts, state => {
        state.currentPage += 1;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
