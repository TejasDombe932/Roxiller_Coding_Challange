import React from "react";
import "./Taskbar.css";

const Taskbar = ({ setActiveComponent }) => {
  return (
    <div className="taskbar">
      <h2>User Dashboard</h2>
      <ul>
        <li onClick={() => setActiveComponent("profile")}>Profile</li>
        <li onClick={() => setActiveComponent("Stores")}>Stores</li>
        <li onClick={() => setActiveComponent("settings")}>Settings</li>
      </ul>
    </div>
  );
};

export default Taskbar;
