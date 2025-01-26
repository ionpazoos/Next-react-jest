# Next-react-jest

#styled components
filters
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilos para los elementos
const FiltersContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

const PriceRangeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export interface FiltersProps {
  onFilterChange: (filter: { search: string; category: string; priceRange: [number, number] }) => void;
  categories: string[];
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, categories }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    onFilterChange({ search, category, priceRange });
  }, [search, category, priceRange, onFilterChange]);

  return (
    <FiltersContainer>
      {/* Filtro de búsqueda */}
      <div>
        <Label htmlFor="search">Search Products</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filtro de categorías */}
      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </div>

      {/* Filtro por rango de precios */}
      <div>
        <Label>Price Range (€)</Label>
        <PriceRangeContainer>
          <Input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            min={0}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <Input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            max={1000}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </PriceRangeContainer>
      </div>
    </FiltersContainer>
  );
};

export default Filters;