
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProducts } from "services/products/queries";
import { IProduct } from "services/products/types";
import Button from "components/atoms/Button";
import Loading from "components/atoms/Loading";
import ErrorGeneric from "components/organisms/ErrorGeneric";
import ProductList from "components/organisms/ProductList";
import DeleteProduct from "components/organisms/DeleteProduct/DeleteProduct";
import { Header } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  
  const [search, setSearch] = useState<string>('');
  const [showDeleteProductModal, setShowDeleteProductModal] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  
  const { data: products = [], isLoading, isError, refetch } = useProducts();

  const productsFiltered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateProduct = () => navigate('/product');

  if (isLoading) return <Loading />
  if (isError) return <ErrorGeneric onRetry={refetch} />

  return (
    <div id='home'>
      <Header>
        <input 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
        />
        <Button onClick={handleCreateProduct}>Agregar</Button>
      </Header>
      <ProductList
        data={search ? productsFiltered : products}
        setProduct={setProduct}
        setShowDeleteProductModal={setShowDeleteProductModal}
      />
      <DeleteProduct
        product={product!}
        showDeleteProductModal={showDeleteProductModal}
        onConfirm={() =>{
          setShowDeleteProductModal(false);
          setProduct(null);
          refetch();
        }}
        onCancel={() => {
          setShowDeleteProductModal(false);
          setProduct(null);
        }}
      />
    </div>
  );
};

export default Home;