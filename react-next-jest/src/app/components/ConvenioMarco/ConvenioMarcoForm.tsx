import React, { useState } from "react";

interface Convenio {
  convenio: string;
  idioma: string;
  fechaFirma: string;
  firmaEmpresa: string;
  firmaEmpresagintza: string;
  estadoConvenio: string;
  convenioActivo: string;
  estadoDocumento: string;
  version: string;
}

interface ConvenioMarcoFormProps {
  setConvenios: React.Dispatch<React.SetStateAction<Convenio[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConvenioMarcoForm: React.FC<ConvenioMarcoFormProps> = ({ setConvenios, setIsModalOpen }) => {
  const [nuevoConvenio, setNuevoConvenio] = useState({
    convenio: "",
    idioma: "Español",
    fechaFirma: "",
    firmaEmpresa: "",
    firmaEmpresagintza: "",
    estadoConvenio: "Pendiente",
    convenioActivo: "Sí",
    estadoDocumento: "No generado",
    version: "1.0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoConvenio((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConvenios((prevConvenios) => [...prevConvenios, nuevoConvenio]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-lg font-semibold mb-4 text-black">Nuevo Convenio</h2>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Nombre del Convenio</label>
          <input
            type="text"
            name="convenio"
            value={nuevoConvenio.convenio}
            onChange={handleChange}
            placeholder="Ej. Convenio Empresa X"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Empresa</label>
          <input
            type="text"
            name="firmaEmpresa"
            value={nuevoConvenio.firmaEmpresa}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
          <input
            type="date"
            name="fechaFirma"
            value={nuevoConvenio.fechaFirma}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Fecha de Finalización</label>
          <input
            type="date"
            name="fechaFirma"
            value={nuevoConvenio.fechaFirma}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* BOTONES */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConvenioMarcoForm;