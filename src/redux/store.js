import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './cars/carsSlice';

import {
  persistStore,
  //    persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAdvertsReducer = persistReducer(persistConfig, advertsReducer);

export const store = configureStore({
  reducer: {
    adverts: persistedAdvertsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
