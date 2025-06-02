import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  search: string;
  region: string;
  sort: 'asc' | 'desc' | '';
}

const initialState: FiltersState = {
  search: '',
  region: '',
  sort: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
    setSort(state, action: PayloadAction<'asc' | 'desc' | ''>) {
      state.sort = action.payload;
    },
    resetFilters(state) {
      state.search = '';
      state.region = '';
      state.sort = '';
    },
  },
});

export const { setSearch, setRegion, setSort, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
