// FormularioContacto.tsx
import { useState } from "react";
import Contacto from "../../interfaces/contacto";

interface FormularioContactoProps {
  onSave: (nuevoContacto: Contacto) => void;
  onCancel: () => void;
}

const ContactosForm = ({ onSave, onCancel }: FormularioContactoProps) => {
  const [nuevoContacto, setNuevoContacto] = useState<Contacto>({
    NombreApellido: "",
    DNI: "",
    Cargo: "",
    email: "",
    observaciones: "",
    telefono: "",
    idiomaRelacional: "",
    EnvioInfoComercial: "",
    Estado: "Activo", 
    Origen: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuevoContacto({
      ...nuevoContacto,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(nuevoContacto); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-lg font-semibold mb-4 text-black">Nuevo Contacto</h2>

      {/* FORMULARIO */}
      <form>
        {/* Nombre y Apellido */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Nombre y Apellido</label>
          <input
            type="text"
            name="NombreApellido"
            value={nuevoContacto.NombreApellido}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* DNI */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">DNI</label>
          <input
            type="text"
            name="DNI"
            value={nuevoContacto.DNI}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Cargo */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Cargo</label>
          <input
            type="text"
            name="Cargo"
            value={nuevoContacto.Cargo}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={nuevoContacto.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Observaciones */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Observaciones</label>
          <input
            type="text"
            name="observaciones"
            value={nuevoContacto.observaciones}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Teléfono */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={nuevoContacto.telefono}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Idioma Relacional */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Idioma Relacional</label>
          <input
            type="text"
            name="idiomaRelacional"
            value={nuevoContacto.idiomaRelacional}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Envio Info Comercial */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">¿Envio Información Comercial?</label>
          <input
            type="text"
            name="EnvioInfoComercial"
            value={nuevoContacto.EnvioInfoComercial}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Estado */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            name="Estado"
            value={nuevoContacto.Estado}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        {/* Origen */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Origen</label>
          <input
            type="text"
            name="Origen"
            value={nuevoContacto.Origen}
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
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            onClick={handleSubmit}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactosForm;