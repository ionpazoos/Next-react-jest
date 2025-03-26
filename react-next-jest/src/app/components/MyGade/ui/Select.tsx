interface SelectProps {
    label: string;
    options: string[];
    value: string;
    onChange?: (val: string) => void;
  }
  
  const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => (
    <div className="grid grid-cols-[220px_1fr] gap-2 items-center">
      <label className="text-gray-700 font-semibold">{label}</label>
      <select
        className="border border-gray-300 p-2 rounded w-full text-black"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
  
  export default Select;