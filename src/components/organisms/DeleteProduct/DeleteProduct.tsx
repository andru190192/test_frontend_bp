import { type DeleteProductProps } from './types';
import Modal from 'components/molecules/Modal';
import Button from 'components/atoms/Button';
import { Footer } from './DeleteProduct.styled';
import { useDeleteProduct } from 'services/products/mutations';

const DeleteProduct = ({ showDeleteProductModal, product, onConfirm, onCancel }: DeleteProductProps) => {

  const onSuccess = () => {
    onConfirm();
  }

  const onError = () => {}

  const { mutate: deleteProduct } = useDeleteProduct({ onSuccess, onError });

  return (
    <Modal isOpen={showDeleteProductModal}>
      <h2>{`Esta seguro que desea eliminar el ${product?.name}`}</h2>
      <Footer>
        <Button $variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button onClick={() => deleteProduct(product.id)}>Confirmar</Button>
      </Footer>
    </Modal>
  );
};

export default DeleteProduct;