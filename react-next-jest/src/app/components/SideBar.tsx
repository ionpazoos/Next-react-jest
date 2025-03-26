/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ChevronDown, Grid } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen w-64 bg-cyan-700 text-white flex flex-col">
      {/* LOGO */}
      <div className="p-4 flex items-center gap-2">
        <img src="/logo.png" alt="MONDRAGON UNIBERTSITATEA" className="h-12" />
      </div>

      {/* MENÚ */}
      <nav className="mt-4">
        {/* EMPRESAS - PRIMER NIVEL */}
        <button
          className="w-full flex items-center justify-between px-4 py-2 font-semibold text-white hover:bg-cyan-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <Grid className="w-5 h-5" />
            Empresas
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* SUBMENÚ CON ANIMACIÓN */}
        <motion.ul
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-cyan-700"
        >
          <li className="px-8 py-2 text-gray-300 hover:text-white cursor-pointer">Empresas</li>
          <li className="px-8 py-2 text-gray-300 hover:text-white cursor-pointer">Contactos</li>
          <li className="px-8 py-2 text-gray-300 hover:text-white cursor-pointer">Empresas extinguidas</li>
          <li className="px-8 py-2 text-gray-300 hover:text-white cursor-pointer">Empresas eliminadas</li>
          <li className="px-8 py-2 text-gray-300 hover:text-white cursor-pointer">Empresas no válidas MODELO</li>
        </motion.ul>
      </nav>

      {/* SEPARADOR */}
      <div className="w-1 bg-orange-600 h-full"></div>
    </div>
  );
};

export default Sidebar;