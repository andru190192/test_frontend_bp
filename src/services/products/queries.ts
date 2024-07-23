import { type AxiosError } from 'axios';
import useCustomQuery from 'hooks/useCustomQuery';
import { type IProductResponse } from './types';
import { EProducts } from './keys';
import productsApi from './api';

export const useProducts = (enabled = true) =>
  useCustomQuery<unknown, AxiosError, IProductResponse[], [EProducts]>({
    queryKey: [EProducts.products],
    queryFn: async () => await productsApi.getProductsData(),
    enabled,
  });
