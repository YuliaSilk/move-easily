import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65d7555627d9a3bc1d7ac4af.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvert = createAsyncThunk(
  'adverts/getAdvert',
  async ({ id }, thunkAPI) => {
    try {
      const adverts = await thunkAPI.get(`/api/adverts/${id}`);
      const advert = adverts.find(advert => advert.id === id);
      return advert;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
