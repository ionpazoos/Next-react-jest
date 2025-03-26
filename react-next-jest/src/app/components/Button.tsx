import React from "react";
import { LogIn, RefreshCcw } from "lucide-react";

interface ButtonTagProps {
  text: string;
  icon?: "login" | "refresh";
  bgColor: string;
  textColor: string;
}

const Button: React.FC<ButtonTagProps> = ({ text, icon, bgColor, textColor }) => {
  const icons = {
    login: <LogIn className="w-4 h-4" />,
    refresh: <RefreshCcw className="w-4 h-4" />,
  };

  return (
    <button
      className={`flex items-center gap-2 px-3 py-1 rounded border`}
      style={{ backgroundColor: bgColor, color: textColor, borderColor: textColor }}
    >
      {icon && icons[icon]}
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

export default Button;