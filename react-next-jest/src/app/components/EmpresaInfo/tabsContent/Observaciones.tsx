import React from "react";
import InfoItem from "../InfoItem";

const Observaciones: React.FC = () => {
  return (
    <div className="grid grid-flow-col gap-x-8 gap-y-4 text-gray-700 font-medium max-h-[400px] overflow-auto"
      style={{ gridTemplateRows: "repeat(6, auto)" }}>
      <InfoItem title={"Seguimiento"} content={""} />
      <InfoItem title={"Observaciones"} content={'Colaboración con myGADE curso 24/25 (ponencias/visitas): info faciltiada por SivB 19/2/25 2018:José Luis Alonso e Igor Rodríguez estuvieron en Madrid presentando"Ecosistemas de Aprendizaje: El caso Eroski"dentro del seminario de APD "Nuevas formasde trabajar y aprender en el entorno digital"impartido por People Matters. 2020- firmado acuerdo ámbito Data (ver Dropbox-Info general- convenios\convenio marco universidad-empresa\firmados\Eroski-Data analytics 2020.docx") visita alumn@s myGADE a planta curso 23/24 - Eroski (Empresa II - Tendentziak)'} />
    </div>
  );
};

export default Observaciones;