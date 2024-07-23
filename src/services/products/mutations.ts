import { type AxiosError } from 'axios';

import useCustomMutation from 'hooks/useCustomMutation';
import productsApi from './api';
import { IMutationParams, IProduct } from './types';

export const useCreateProduct = ({ onSuccess, onError }: IMutationParams) =>
  useCustomMutation<
    IProduct,
    AxiosError,
    IProduct,
    unknown
  >({
    mutationFn: (params: IProduct) => productsApi.createProduct(params),
    onSuccess,
    onError,
  });

  export const useDeleteProduct = ({ onSuccess, onError }: IMutationParams) =>
    useCustomMutation<
      void,
      AxiosError,
      string,
      unknown
    >({
      mutationFn: (productId: string) => productsApi.deleteProduct(productId),
      onSuccess,
      onError,
    });