/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import InfoItem from "../InfoItem";
import InfoEmpresaInterface from "@/app/interfaces/infoEmpresa";

const InfoEmpresa: React.FC = () => {
  const data:InfoEmpresaInterface = {
    CIF: "info",
    dirección: "Azeri kalea, 1",
    localidad: "Arrasate/Mondragón",
    teléfono: "943788776",
    email: "soinua@soinua.com",
    idiomaRelacional: "Castellano",
    sector: "Distribución Mayorista o Minorista",
    corporacionMondragon: "No",
    numeroTrabajadores: "1-10",
    cursoAcademico: "18/19",
    fechaPrimeraVisitaCaptacion: "" 
  };
  const [info, setInfo] = useState<InfoEmpresaInterface>(data);

  return (
    <div className="grid grid-flow-col gap-x-8 gap-y-4 text-gray-700 font-medium max-h-[400px] overflow-auto"
      style={{ gridTemplateRows: "repeat(6, auto)" }}>
      <InfoItem title={"CIF"} content={info.CIF} />
      <InfoItem title={"Dirección"} content={info.dirección} />
      <InfoItem title={"Localidad"} content={info.localidad} />
      <InfoItem title={"Teléfono"} content={info.teléfono} />
      <InfoItem title={"Email"} content={info.email} />
      <InfoItem title={"Idioma relacional"} content={info.idiomaRelacional} />
      <InfoItem title={"Sector"} content={info.sector} />
      <InfoItem title={"Corporación MONDRAGON"} content={info.corporacionMondragon} />
      <InfoItem title={"Nº trabajadores"} content={info.numeroTrabajadores} />
      <InfoItem title={"Curso académico"} content={info.cursoAcademico} />
      <InfoItem title={"Fecha de la primera visita de captación"} content={info.fechaPrimeraVisitaCaptacion} />
    </div>
  );
};

export default InfoEmpresa;