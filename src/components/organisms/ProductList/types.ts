import { Dispatch, SetStateAction } from "react";
import { IProduct } from "services/products/types";

export interface ProductListProps {
  data: IProduct[];
  setProduct: (product: IProduct) => void;
  setShowDeleteProductModal: Dispatch<SetStateAction<boolean>>;
}