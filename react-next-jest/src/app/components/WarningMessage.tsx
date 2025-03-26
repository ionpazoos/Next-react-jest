import React from "react";

interface WarningMessageProps {
  message: string;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-md">
      <strong>ATENCIÓN:</strong> {message}
    </div>
  );
};

export default WarningMessage;