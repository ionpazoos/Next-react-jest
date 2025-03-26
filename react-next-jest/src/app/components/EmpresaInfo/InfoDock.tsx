import React, { useState } from "react";
import InfoTabs from "./InfoTabs";
import InfoEmpresa from "./tabsContent/InfoEmpresa";
import EquipoEmpresa from "./tabsContent/EquipoEmpresa";
import Observaciones from "./tabsContent/Observaciones";
import PraktiKer from "./tabsContent/Praktiker";

const InfoDock: React.FC = () => {
  const [activeTab, setActiveTab] = useState("InfoEmpresa");

  const tabs = [
    { label: "InfoEmpresa", content: <InfoEmpresa /> },
    { label: "Equipo Uni-Empresa", content: <EquipoEmpresa /> },
    { label: "Observaciones", content: <Observaciones/> },
    { label: "PraktiKer", content: <PraktiKer/> },
  ];

  return (
    <div className="flex border-t border-b border-r border-gray-300 rounded-lg bg-white shadow-sm h-full min-h-[300px]">
      {/* TABS A LA IZQUIERDA */}
      <div className="w-1/4 bg-white flex flex-col  border-gray-300">
        <InfoTabs
          tabs={tabs.map((tab) => ({
            label: tab.label,
            onClick: () => setActiveTab(tab.label),
          }))}
          activeTab={activeTab}
        />
      </div>

      {/* CONTENIDO SEGÚN TAB SELECCIONADO */}
      <div className="relative w-3/4 p-6 text-gray-700">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default InfoDock;