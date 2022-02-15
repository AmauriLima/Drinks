import { HttpClient } from '../utils/HttpClient';
import { Drink } from './DTO';

class DrinksService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://api.punkapi.com/v2');
  }

  async listDrinks<T>() {
    const response = await this.httpClient.get<T>('/beers');
    return response;
  }

  createDrink(prevState: Drink[], { description, name }: Drink) {
    const drink = {
      name,
      description,
      id: Math.random(),
    } as Drink;

    return [drink, ...prevState];
  }

  deleteDrink(prevState: Drink[], id: number) {
    const newListDrink = prevState.filter((drink) => drink.id !== id);
    return newListDrink;
  }
}

export default new DrinksService();
