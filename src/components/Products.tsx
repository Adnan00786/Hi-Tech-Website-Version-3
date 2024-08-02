import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import SideDrawer from './SideDrawer';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

type Feature = {
  label: string;
  value: string;
};

type ProductDescription = {
  features: Feature[];
  reasons: Feature[];
  suitability: string;
};

type Product = {
  image: string;
  brand: string;
  subtitle: string;
  description: ProductDescription | string; // Adjusted to handle both structured and simple descriptions
  model: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./Products.json');
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleMoreDetailsClick = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            brand={product.brand}
            model={product.model}
            subtitle={product.subtitle}
            onMoreDetailsClick={() => handleMoreDetailsClick(product)}
          />
        ))}
      </ProductsContainer>
      {selectedProduct && (
        <SideDrawer
          isOpen={drawerOpen}
          onClose={handleCloseDrawer}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default Products;
