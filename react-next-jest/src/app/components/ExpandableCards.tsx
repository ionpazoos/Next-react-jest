import { useState } from "react";
import { ChevronDown } from "lucide-react";


const ExpandableSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-gray-300 bg-white rounded-md shadow-sm mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 text-gray-800 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
