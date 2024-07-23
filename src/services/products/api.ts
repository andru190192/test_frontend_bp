import axiosInstance from 'config/axios';
import BaseApi from 'utils/services/baseApi';
import { IProduct, type IProductResponse } from './types';

class ProductsApi extends BaseApi {
  constructor() {
    super(axiosInstance);
  }

  getProductsData = async (): Promise<IProductResponse[]> => {
    const response = await this.client.get<IProductResponse[]>(`/bp/products`);

    return response?.data;
  };

  verificationId = async (productId: string): Promise<boolean> => {
    const response = await this.client.get<boolean>(`/bp/products/verification?id=${productId}`);

    return response?.data;
  };

  createProduct = async (product: IProduct): Promise<IProduct> => {
    const response = await this.client.post<IProduct>('/bp/products', product);

    return response?.data;
  };

  deleteProduct = async (productId: string): Promise<void> => await this.client.delete(`/bp/products?id=${productId}`);
}

export default new ProductsApi();
