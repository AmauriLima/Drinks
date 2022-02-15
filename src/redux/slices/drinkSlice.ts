/* eslint-disable no-param-reassign */
import { createSlice, SerializedError } from '@reduxjs/toolkit';

import { Drink } from '@services/DrinksService/DTO';
import { createDrink, listDrinks } from '@services/DrinksService/redux';

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
    builder.addCase(createDrink.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createDrink.fulfilled, (state: any, action) => {
      state.status = 'success';
      state.drinks = action.payload;
    });
    builder.addCase(createDrink.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export const selectDrinks = (state: any) => state.drinks;

export default drinkSlice.reducer;
