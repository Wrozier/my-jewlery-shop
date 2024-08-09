import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
}

interface RelatedProductsProps {
  id: number;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ id, category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch related products based on category
    const fetchRelatedProducts = async (category: string): Promise<Product[]> => {
      // Mock fetch function, replace with actual API call
      return [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ];
    };

    fetchRelatedProducts(category).then(setProducts);
  }, [category]);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default RelatedProducts;
