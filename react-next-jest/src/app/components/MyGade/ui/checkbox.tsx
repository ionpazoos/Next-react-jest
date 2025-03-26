interface CheckboxProps {
    label: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
  }
  
  const Checkbox: React.FC<CheckboxProps> = ({
    label,
    defaultChecked = false,
    onChange,
  }) => (
    <label className="inline-flex items-center space-x-2 text-gray-700">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="form-checkbox"
      />
      <span>{label}</span>
    </label>
  );
  
  export default Checkbox;