import { useState } from "react";
import Contacto from "../../interfaces/contacto";
import ContactosForm from "./ContactosForm";

const Contactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>([
    {
      NombreApellido: "oscra De La Peña",
      DNI: "",
      Cargo: "Técnico Personas",
      email: "example@example.com",
      observaciones: "",
      telefono: "",
      idiomaRelacional: "Castellano",
      EnvioInfoComercial: "Si",
      Estado: "Activo",
      Origen: "Uni-Empresa",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para agregar el nuevo contacto
  const handleSave = (nuevoContacto: Contacto) => {
    setContactos([...contactos, nuevoContacto]);
    setIsModalOpen(false);
  };

  // Función para cancelar la creación del contacto
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded-lg shadow-sm mb-10">
      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Nombre y Apellido</th>
              <th className="px-4 py-2 text-left">DNI</th>
              <th className="px-4 py-2 text-left">Cargo</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Observaciones</th>
              <th className="px-4 py-2 text-left">Teléfono / Opcional</th>
              <th className="px-4 py-2 text-left">Idioma relacional</th>
              <th className="px-4 py-2 text-left">Envio info comercial</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Origen</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-gray-500">{contacto.NombreApellido}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.DNI}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.Cargo}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.email}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.observaciones}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.telefono}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.idiomaRelacional}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.EnvioInfoComercial}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.Estado}</td>
                <td className="px-4 py-2 text-gray-500">{contacto.Origen}</td>
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
          Crear
        </button>
      </div>

      {/* Modal para agregar contacto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ContactosForm onSave={handleSave} onCancel={handleCancel} />
        </div>
      )}
    </div>
  );
};

export default Contactos;