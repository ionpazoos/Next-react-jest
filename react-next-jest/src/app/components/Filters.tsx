"use client";

import React, { useEffect, useState } from "react";

interface FiltersProps {
  onFilterChange: (filter: { search: string; category: string; priceRange: [number, number] }) => void;
  categories: string[]; // Lista de categorías dinámicas
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, categories }) => {
  const [search, setSearch] = useState(""); // Filtro de búsqueda por texto
  const [category, setCategory] = useState(""); // Filtro de categoría seleccionada
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Rango de precio

  // Función para actualizar los filtros y notificarlos al componente padre
  const handleFilterChange = () => {
    onFilterChange({ search, category, priceRange });
  };
// Llama a handleFilterChange cada vez que cambie cualquier filtro
useEffect(() => {
    handleFilterChange();
  }, [search, category, priceRange]);
  // Cuando se cambie cualquier filtro, llama a handleFilterChange
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleFilterChange();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    handleFilterChange();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
    handleFilterChange();
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      {/* Filtro de búsqueda */}
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      {/* Filtro de categoría */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          <option value="">All Categories</option>
          {/* Usamos .map para generar las opciones dinámicamente */}
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro por rango de precios */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range (€)
        </label>
        <div className="flex space-x-4">
          <input
            type="number"
            value={priceRange[0]}
            min="0"
            max={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-1/2 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Min"
          />
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max="1000"
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-1/2 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;