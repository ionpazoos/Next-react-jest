"use client";

import React, { useState } from "react";
import ProductList from "@/app/components/ProductList";
import Filters from "@/app/components/Filters";
import { products } from "@/app/data/products";

const categories = ["Electronics", "Accessories", "Gaming", "Monitors"]; // Categorías de ejemplo

const Home: React.FC = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    priceRange: [0, 1000],
  });

  // Filtrar productos en base a los filtros aplicados
  const filteredProducts = products.filter((product) => {
    // Filtrar por texto de búsqueda
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());

    // Filtrar por categoría (si está seleccionada)
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;

    // Filtrar por rango de precio
    const matchesPrice =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Product Store</h1>
      <Filters onFilterChange={setFilters} categories={categories} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;