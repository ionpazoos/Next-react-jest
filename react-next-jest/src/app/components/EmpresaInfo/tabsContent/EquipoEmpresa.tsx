import React from "react";
import InfoItem from "../InfoItem";

const EquipoEmpresa: React.FC = () => {
  return (
    <div className="grid grid-flow-col gap-x-8 gap-y-4 text-gray-700 font-medium max-h-[400px] overflow-auto"
      style={{ gridTemplateRows: "repeat(6, auto)" }}>
      <InfoItem title={"Gestor Responsable"} content={"Begoña"} />
      <InfoItem title={"Apoyo Captación Visita"} content={"Houda"} />
      <InfoItem title={"Apoyo Captación Actividad Colaborativa"} content={"Houda"} />
      <InfoItem title={"Apoyo Captación Business Data"} content={"Belén"} />
    </div>
  );
};

export default EquipoEmpresa;