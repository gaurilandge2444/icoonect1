import React from 'react';
import { useshiv } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { productId } = useshiv();
  const product = productsData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
