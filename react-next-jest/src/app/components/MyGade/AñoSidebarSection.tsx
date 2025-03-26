import { useState } from "react";

interface SubItem {
  id: string;
  label: string;
}

interface AñoSidebarSectionProps {
  year: string;
  items: SubItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

const AñoSidebarSection: React.FC<AñoSidebarSectionProps> = ({
  year,
  items,
  activeId,
  onSelect,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-3">
      <button
        className="text-gray-800 font-semibold text-sm mb-1 w-full text-left"
        onClick={() => setOpen(!open)}
      >
        myGADE Dual Anual {year}
      </button>

      {open && (
        <div className="flex flex-col gap-1 pl-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`text-sm text-left px-2 py-1 w-full border-l-4 ${
                activeId === item.id
                  ? "border-gray-300 bg-white text-gray-700 font-medium"
                  : "border-transparent text-blue-400 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AñoSidebarSection;