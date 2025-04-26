import React, { useState } from 'react';

export const Tabs = ({
  tabs,
  defaultTab = 0,
  onChange,
  className = '',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === index
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};