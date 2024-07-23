import { IProduct } from "services/products/types";

export interface DeleteProductProps {
  product: IProduct;
  showDeleteProductModal: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}