import AñoSidebarSection from "./AñoSidebarSection";

interface ConvenioSidebarProps {
  convenios: {
    year: string;
    items: { id: string; label: string }[];
  }[];
  activeId: string;
  onSelect: (id: string) => void;
  onAdd?: () => void;
}

const ConvenioSidebar: React.FC<ConvenioSidebarProps> = ({
  convenios,
  activeId,
  onSelect,
  onAdd,
}) => {
  return (
    <div className="w-80 bg-white border-r py-4 px-3 text-sm">
      <button
        onClick={onAdd}
        className="mb-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium"
      >
        Añadir convenio
      </button>

      {convenios.map((yearGroup) => (
        <AñoSidebarSection
          key={yearGroup.year}
          year={yearGroup.year}
          items={yearGroup.items}
          activeId={activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ConvenioSidebar;