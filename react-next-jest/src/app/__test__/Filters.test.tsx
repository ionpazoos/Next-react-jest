import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/Filters';

describe('Filters Component', () => {
  test('calls onFilterChange when search input changes', () => {
    const mockOnFilterChange = jest.fn();
    const categories = ['Gaming', 'Accessories', 'Monitors'];

    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Mouse' } });

    // La última llamada debe tener el estado esperado
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: 'Mouse',
      category: '',
      priceRange: [0, 1000],
    });
  });

  test('calls onFilterChange when category changes', () => {
    const mockOnFilterChange = jest.fn();
    const categories = ['Gaming', 'Accessories', 'Monitors'];

    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const categorySelect = screen.getByLabelText('Category');
    fireEvent.change(categorySelect, { target: { value: 'Gaming' } });

    // La última llamada debe tener el estado esperado
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: '',
      category: 'Gaming',
      priceRange: [0, 1000],
    });
  });

  test('calls onFilterChange when price range changes', () => {
    const mockOnFilterChange = jest.fn();
    const categories = ['Gaming', 'Accessories', 'Monitors'];

    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const minPriceInput = screen.getByPlaceholderText('Min');
    const maxPriceInput = screen.getByPlaceholderText('Max');

    fireEvent.change(minPriceInput, { target: { value: '50' } });
    fireEvent.change(maxPriceInput, { target: { value: '300' } });

    // Verificar la última llamada al mock
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: '',
      category: '',
      priceRange: [50, 300],
    });
  });

  test('renders dynamic category options', () => {
    const mockOnFilterChange = jest.fn();
    const categories = ['Gaming', 'Accessories', 'Monitors'];

    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    // Verifica que todas las categorías se hayan renderizado en el select
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});