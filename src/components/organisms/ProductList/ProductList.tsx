import { useState, ChangeEvent } from 'react';
import { type ProductListProps } from './types';
import { Column, Container, Footer, Row, Table } from './ProductList.styled';
import Select from 'components/atoms/Select';
import { formatDate } from 'utils/common';
import { IProduct } from 'services/products/types';

const ProductList = ({
  data: products,
  setProduct,
  setShowDeleteProductModal,
}: ProductListProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  const handleActionChange = (event: ChangeEvent<HTMLSelectElement>, product: IProduct) => {
    const value = parseInt(event.target.value);
    setProduct(product);
    if (value === 2) setShowDeleteProductModal(true);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Column>ID</Column>
            <Column>Nombre</Column>
            <Column>Descripción</Column>
            <Column>Logo</Column>
            <Column>Fecha de Liberación</Column>
            <Column>Fecha de Revisión</Column>
            <Column>Acciones</Column>
          </tr>
        </thead>
        <tbody>
          {products.slice(0, itemsPerPage).map(product => (
            <tr key={product.id}>
              <Row>{product.id}</Row>
              <Row>{product.name}</Row>
              <Row>{product.description}</Row>
              <Row><img src={product.logo} alt={product.name} /></Row>
              <Row>{formatDate(product.date_release)}</Row>
              <Row>{formatDate(product.date_revision)}</Row>
              <Row>
                <Select
                  id="actions"
                  options={[{ value: 1, label: 'Editar' }, { value: 2, label: 'Eliminar' }]}
                  value={0}
                  onChange={(event) => handleActionChange(event, product)}
                />
              </Row>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <span>{products.length} Resultados</span>
        <Select
          id="itemsPerPage"
          options={[{ value: 5, label: '5' }, { value: 10, label: '10' }, { value: 20, label: '20' }]}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
      </Footer>
    </Container>
  );
};

export default ProductList;