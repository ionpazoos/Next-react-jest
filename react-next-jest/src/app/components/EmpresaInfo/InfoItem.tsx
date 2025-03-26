import React from "react";

interface InfoItemProps {
  title: string;
  content: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, content }) => {
  return (
    <div className="text-gray-700 font-medium">
      <span className="font-bold">{title}:</span> {content}
    </div>
  );
};

export default InfoItem;