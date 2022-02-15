/* eslint-disable no-param-reassign */
import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Drink } from '@services/DrinksService/DTO';
import { listDrinks } from '@services/DrinksService/redux';

type initialStateProps = {
  drinks: Response | Drink[];
  status: 'loading' | 'failed' | 'success' | null;
  error: SerializedError | null;
}

const initialState = {
  drinks: [],
  status: null,
  error: null,
} as initialStateProps;

export const drinkSlice = createSlice({
  name: 'drink',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listDrinks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(listDrinks.fulfilled, (state, action) => {
      state.status = 'success';
      state.drinks = action.payload;
    });
    builder.addCase(listDrinks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export const selectDrinks = useSelector((state: any) => state.drinks);

export default drinkSlice.reducer;
