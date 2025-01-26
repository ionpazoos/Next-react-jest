import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {
  test('renders product details', () => {
    const product = {
      name: 'Gaming Mouse',
      price: 49.99,
      description: 'High precision wireless gaming mouse.',
      image: 'https://via.placeholder.com/150',
    };

    render(<ProductCard product={product} />);

    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument();
    expect(screen.getByText('49.99 €')).toBeInTheDocument();
    expect(screen.getByText('High precision wireless gaming mouse.')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.image);
  });
});