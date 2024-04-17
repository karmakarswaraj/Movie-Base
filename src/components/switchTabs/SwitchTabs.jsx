import React from "react";
import { useState } from "react";
import "./switchTabs.scss";
function SwitchTabs({ data, onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeLeft = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setActiveTab(index);
    }, 300);
    onTabChange(tab);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={tab}
            className={`tabItem ${activeTab === index ? "active" : ""}`}
            onClick={() => activeLeft(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
}

export default SwitchTabs;
