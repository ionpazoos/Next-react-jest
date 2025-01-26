import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';

describe('ProductList', () => {
  test('renders a list of product cards', () => {
    const products = [
      {
        id: 1,
        name: 'Gaming Mouse',
        price: 49.99,
        description: 'High precision wireless gaming mouse.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Mechanical Keyboard',
        price: 89.99,
        description: 'RGB mechanical keyboard with customizable keys.',
        image: 'https://via.placeholder.com/150',
      },
    ];

    render(<ProductList products={products} />);

    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
  });
});