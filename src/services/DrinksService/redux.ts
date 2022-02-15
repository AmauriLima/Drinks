import { createAsyncThunk } from '@reduxjs/toolkit';

import DrinksService from '.';

export const listDrinks = createAsyncThunk('drinks/listDrinks', async () => {
  const response = await DrinksService.listDrinks<Response>();
  return response;
});
