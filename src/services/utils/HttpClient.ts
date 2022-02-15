export class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`);

    const contentType = response.headers.get('Content-Type');

    let body = null;
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    return body;
  }
}
