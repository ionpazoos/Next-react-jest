import React from "react";
import InfoItem from "../InfoItem";

const PraktiKer: React.FC = () => {
  return (
    <div className="grid grid-flow-col gap-x-8 gap-y-4 text-gray-700 font-medium max-h-[400px] overflow-auto"
      style={{ gridTemplateRows: "repeat(6, auto)" }}>
      <InfoItem title={"Contacto"} content={""} />
      <InfoItem title={"Info Compartida"} content={""} />
      <InfoItem title={"Fecha"} content={""} />
      <InfoItem title={"Mobilidad"} content={""} />
    </div>
  );
};

export default PraktiKer;