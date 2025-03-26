import { FC, useState } from "react";
import { MessageCircle, Lightbulb, RefreshCcw, Shuffle } from "lucide-react";

interface IconButtonProps {
  type: "chat" | "idea" | "refresh" | "shuffle";
  color: string;
  tooltip: string;
}

const IconButton: FC<IconButtonProps> = ({ type, color, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    chat: <MessageCircle className="w-5 h-5 text-white" />,
    idea: <Lightbulb className="w-5 h-5 text-white" />,
    refresh: <RefreshCcw className="w-5 h-5 text-white" />,
    shuffle: <Shuffle className="w-5 h-5 text-white" />,
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* BOTÓN PRINCIPAL */}
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full relative"
        style={{ backgroundColor: color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icons[type]}
      </button>

      {/* TOOLTIP (Debajo del botón) */}
      {isHovered && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-gray-100 text-black text-xs px-3 py-2 rounded-md shadow-md whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default IconButton;