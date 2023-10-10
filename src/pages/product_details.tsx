import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  // Mock product data
  const product: Product = {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'product-image.jpg',
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
