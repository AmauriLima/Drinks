import { HttpClient } from '../utils/HttpClient';

class DrinksService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://api.punkapi.com/v2');
  }

  async listDrinks<T>() {
    const response = await this.httpClient.get<T>('/beers');
    return response;
  }
}

export default new DrinksService();
