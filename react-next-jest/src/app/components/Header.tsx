import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
  path: { name: string; link: string }[];
}

const Header: React.FC<BreadcrumbProps> = ({ title, path }) => {
  return (
    <div className="bg-white shadow-sm p-4 border-b border-gray-300">
      {/* Título */}
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      {/* Breadcrumb (Ruta navegable) */}
      <nav className="text-sm text-gray-500 mt-1">
        {path.map((item, index) => (
          <span key={index}>
            {index !== 0 && " / "}
            {index === path.length - 1 ? (
              <span className="text-gray-700 font-medium">{item.name}</span>
            ) : (
              <Link to={item.link} className="text-black hover:underline">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Header;