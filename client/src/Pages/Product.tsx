import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext, ShopContextType } from '../Context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { Box, CircularProgress, Typography } from '@mui/material';

interface ProductType {
  id: number;
  image: string;
  name: string;
  old_price: number;
  new_price: number;
  description: string;
  category: string;
}

const Product: React.FC = () => {
  const { products } = useContext(ShopContext) as ShopContextType;
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((e) => e.id === Number(productId));
      setProduct(foundProduct || null);
    }
  }, [products, productId]);

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress size={60} />
        <Typography variant="h6" marginLeft={2}>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box padding="20px">
      <BreadCrums product={product} /> {/* Passing the product prop */}
      <ProductDisplay product={product} />
      <DescriptionBox description={product.description} />
      <RelatedProducts id={product.id} category={product.category} />
    </Box>
  );
};

export default Product;
