import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/Filters';

describe('Filters Component', () => {
  const mockOnFilterChange = jest.fn();
  const categories = ['Gaming', 'Accessories', 'Monitors'];

  beforeEach(() => {
    jest.clearAllMocks(); // Limpia las llamadas previas antes de cada test
  });

  test('calls onFilterChange when search input changes', () => {
    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Mouse' } });

    // Verifica que se llama con el filtro actualizado
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: 'Mouse',
      category: '',
      priceRange: [0, 1000],
    });
  });

  test('calls onFilterChange when category changes', () => {
    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const categorySelect = screen.getByLabelText('Category');
    fireEvent.change(categorySelect, { target: { value: 'Gaming' } });

    // Verifica que se llama con la categoría seleccionada
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: '',
      category: 'Gaming',
      priceRange: [0, 1000],
    });
  });

  test('calls onFilterChange when price range changes', () => {
    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    const minPriceInput = screen.getByPlaceholderText('Min');
    const maxPriceInput = screen.getByPlaceholderText('Max');

    fireEvent.change(minPriceInput, { target: { value: '50' } });
    fireEvent.change(maxPriceInput, { target: { value: '300' } });

    // Verifica que se llama con el rango de precios actualizado
    expect(mockOnFilterChange).toHaveBeenLastCalledWith({
      search: '',
      category: '',
      priceRange: [50, 300],
    });
  });

  test('renders dynamic category options', () => {
    render(<Filters onFilterChange={mockOnFilterChange} categories={categories} />);

    // Verifica que todas las categorías se renderizan
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});