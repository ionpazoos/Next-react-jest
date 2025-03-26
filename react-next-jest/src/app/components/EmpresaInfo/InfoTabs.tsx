import React, { useEffect, useRef } from "react";

interface Tab {
  label: string;
  onClick: () => void;
}

interface InfoTabsProps {
  tabs: Tab[];
  activeTab: string;
}

const InfoTabs: React.FC<InfoTabsProps> = ({ tabs, activeTab }) => {
  const activeTabRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeTabRef.current) {
      const rect = activeTabRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--active-tab-position", `${rect.top}px`);
      document.documentElement.style.setProperty("--active-tab-height", `${rect.height}px`);
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col w-full">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          ref={activeTab === tab.label ? activeTabRef : null}
          className={`py-3 px-4 text-left text-sm font-medium ${
            activeTab === tab.label
              ? "text-gray-700 border-l font-semibold border-gray-300 bg-white border-t border-b"
              : "text-gray-500 border-r hover:border-gray-300 hover:text-gray-700 border-gray-300"
          }`}
          onClick={tab.onClick}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default InfoTabs;