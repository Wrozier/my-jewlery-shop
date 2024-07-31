import React, { useEffect, useState } from 'react';

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch related products based on category
    const fetchRelatedProducts = async (category) => {
      // Mock fetch function, replace with actual API call
      return [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ];
    };

    fetchRelatedProducts(category).then(setProducts);
  }, [category]); // Add 'category' to the dependency array

  return (
    <div>
      {products.map(product => {
        return <div key={product.id}>{product.name}</div>; // Ensure a value is returned
      })}
    </div>
  );
};

export default RelatedProducts;
