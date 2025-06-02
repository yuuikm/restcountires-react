import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  search: string;
  region: string;
  sort: 'asc' | 'desc' | '';
}

const savedFilters = localStorage.getItem('filters');
const initialState: FiltersState = savedFilters
  ? JSON.parse(savedFilters)
  : {
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
      localStorage.setItem('filters', JSON.stringify(state));
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
      localStorage.setItem('filters', JSON.stringify(state));
    },
    setSort(state, action: PayloadAction<'asc' | 'desc' | ''>) {
      state.sort = action.payload;
      localStorage.setItem('filters', JSON.stringify(state));
    },
    resetFilters(state) {
      state.search = '';
      state.region = '';
      state.sort = '';
      localStorage.setItem('filters', JSON.stringify(state));
    },
  },
});

export const { setSearch, setRegion, setSort, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
