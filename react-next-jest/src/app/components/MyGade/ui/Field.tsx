interface FieldProps {
    label: string;
    value: string;
  }
  
  const Field: React.FC<FieldProps> = ({ label, value }) => {
    return (
      <div className="grid grid-cols-[220px_1fr] gap-2 items-center text-sm">
        <span className="font-semibold text-black">{label}</span>
        <span className="text-gray-800">{value}</span>
      </div>
    );
  };
  
  export default Field;