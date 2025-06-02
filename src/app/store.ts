import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from 'features/countries/countriesApi';
import filtersReducer from 'features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
