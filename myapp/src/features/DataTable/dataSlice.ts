import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchData } from './dataApi';

export interface DataState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: DataState = {
  value: [],
  status: 'idle',
};

export const getDataAsync = createAsyncThunk(
  'data/getDataAsync',
  async () => {
    const response = await fetchData();
    return response;
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getDataAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectData = (state: RootState) => state.data.value;

export default dataSlice.reducer;

