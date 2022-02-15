import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drinks: [],
  status: null,
  error: '',
};

export const drinkSlice = createSlice({
  name: 'drink',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default drinkSlice.reducer;
