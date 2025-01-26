import React from 'react';

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{product.description}</p>
      <span className="text-blue-600 font-bold">{product.price} €</span>
    </div>
  );
};

export default ProductCard;