import { useState } from "react";
import ConvenioMarcoForm from "./ConvenioMarcoForm";

const ConvenioMarco = () => {
  const [convenios, setConvenios] = useState([
    {
      convenio: "Convenio A",
      idioma: "Español",
      fechaFirma: "10/03/2025",
      firmaEmpresa: "Empresa S.A.",
      firmaEmpresagintza: "Empresagintza",
      estadoConvenio: "Pendiente",
      convenioActivo: "Sí",
      estadoDocumento: "No generado",
      version: "1.0",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm mb-10">
      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Convenio</th>
              <th className="px-4 py-2 text-left">Idioma</th>
              <th className="px-4 py-2 text-left">Fecha firma</th>
              <th className="px-4 py-2 text-left">Firma empresa</th>
              <th className="px-4 py-2 text-left">Firma empresagintza</th>
              <th className="px-4 py-2 text-left">Estado convenio</th>
              <th className="px-4 py-2 text-left">Convenio activo</th>
              <th className="px-4 py-2 text-left">Estado documento</th>
              <th className="px-4 py-2 text-left">Versión</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {convenios.map((convenio, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-gray-500">{convenio.convenio}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.idioma}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.fechaFirma}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.firmaEmpresa}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.firmaEmpresagintza}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.estadoConvenio}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.convenioActivo}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.estadoDocumento}</td>
                <td className="px-4 py-2 text-gray-500">{convenio.version}</td>
                <td className="px-4 py-2">
                  {convenio.estadoDocumento === "No generado" && (
                    <button className="bg-orange-500 text-white px-2 py-1 rounded mb-1">
                      Generar
                    </button>
                  )}
                  {convenio.estadoDocumento === "Generado" && (
                    <button className="bg-orange-500 text-white px-2 py-1 rounded">
                      Regenerar
                    </button>
                  )}
                  <button className="bg-orange-500 text-white px-2 py-1 rounded ml-2">
                    Subir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón agregar */}
      <div className="p-2">
        <button
          className="bg-orange-500 text-white px-5 py-1 rounded-md flex items-center gap-2 hover:bg-orange-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          crear
        </button>
      </div>

      {/* Modal para agregar convenio */}
       {/* Modal para agregar convenio */}
       {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ConvenioMarcoForm setConvenios={setConvenios} setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
};

export default ConvenioMarco;