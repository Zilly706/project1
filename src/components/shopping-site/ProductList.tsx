import React from 'react';
import '../../App.css';

interface Product {
  url: string;
  name: string;
  seller: string;
  price: number;
  quantity: number;
}

type ProductListProps = {
  product: Product[];
  addToCart: (data: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ product, addToCart }) => {
  return (
    <div className='flex'>
      {product.map((productItem, productIndex) => (
        <div key={productIndex} style={{ width: '50%' }}>
          <div className='product-item'>
          <img src={productItem.url} alt={productItem.name} style={{ width: '100%' }} />
          <p>{productItem.name}</p>
          <p>{productItem.seller}</p>
          <p>Rs.{productItem.price} /-</p>
          <button onClick={() => addToCart(productItem)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
