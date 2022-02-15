import { createAsyncThunk } from '@reduxjs/toolkit';

import DrinksService from '.';
import { Drink } from './DTO';

export const listDrinks = createAsyncThunk('drinks/listDrinks', async () => {
  const response = await DrinksService.listDrinks<Drink[]>();
  return response;
});

export const createDrink = createAsyncThunk(
  'drinks/createDrink',
  ({ prevState, drinkData }: {prevState: Drink[], drinkData: Drink}): Drink[] => {
    const response = DrinksService.createDrink(prevState, drinkData);
    return response;
  },
);

export const deleteDrink = createAsyncThunk(
  'drinks/deleteDrink',
  ({ prevState, id }: {prevState: Drink[], id: number}): Drink[] => {
    const response = DrinksService.deleteDrink(prevState, id);
    return response;
  },
);
