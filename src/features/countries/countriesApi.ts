import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from 'shared/types/Country';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => 'all?fields=cca3,name,flags',
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;
