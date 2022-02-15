import { HttpClient } from '../utils/HttpClient';

class DrinksService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://api.punkapi.com/v2');
  }

  async listDrinks<T>() {
    return this.httpClient.get<T>('/beers');
  }
}

export default new DrinksService();
