import { JSX, useState } from "react";
import { ChevronDown, Phone, Mail, MessageSquare, Target } from "lucide-react";

interface MenuItem {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
}

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Registrar llamada", icon: <Phone className="w-4 h-4" />, onClick: () => alert("Registrar llamada") },
    { label: "Registrar e-mail", icon: <Mail className="w-4 h-4" />, onClick: () => alert("Registrar e-mail") },
    { label: "Planificar visita", icon: <MessageSquare className="w-4 h-4" />, onClick: () => alert("Planificar visita") },
    { label: "Registrar visita", icon: <MessageSquare className="w-4 h-4" />, onClick: () => alert("Registrar visita") },
    { label: "Registrar objetivo", icon: <Target className="w-4 h-4" />, onClick: () => alert("Registrar objetivo") },
    { label: "Crear AC práctica", onClick: () => alert("Crear AC práctica") },
    { label: "Crear AC myGADE Dual", onClick: () => alert("Crear AC myGADE Dual") },
    { label: "Crear AC FP Dual Intensiva", onClick: () => alert("Crear AC FP Dual Intensiva") },
  ];

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
       className={`px-4 py-2 rounded-md flex items-center gap-2 shadow-md h-8 w-24 ${
        isOpen ? "bg-teal-900" : "bg-orange-600"
      } text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Acción <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;