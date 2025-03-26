interface ConvenioSidebarItemProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
  }
  
  const ConvenioSidebarItem: React.FC<ConvenioSidebarItemProps> = ({
    label,
    active = false,
    onClick,
  }) => {
    return (
      <button
        onClick={onClick}
        className={`text-sm text-left px-3 py-2 w-full border-l-4 ${
          active
            ? "border-gray-300 bg-white text-gray-700 font-medium"
            : "border-transparent text-blue-400 hover:text-blue-600"
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default ConvenioSidebarItem;