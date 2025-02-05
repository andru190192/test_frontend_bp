import { AxiosError } from "axios";

export interface IMutationParams {
  onSuccess?: (data: unknown) => void;
  onError?: (err: AxiosError) => void;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string | Date;
  date_revision: string | Date;
}

export interface IProductResponse extends IProduct {
}