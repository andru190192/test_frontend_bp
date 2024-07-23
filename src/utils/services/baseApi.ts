import { type AxiosInstance } from 'axios';

class BaseApi {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }
}

export default BaseApi;
