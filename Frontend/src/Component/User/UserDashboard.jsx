import React, { useState } from "react";
import "./UserDashboard.css";
import Taskbar from "./Taskbar";
import Profile from "./Profile";
import Stores from "./Stores";
import Settings from "./Settings";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile");

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "Stores":
        return <Stores/>;
      case "settings":
        return <Settings />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="user-dashboard">
      <Taskbar setActiveComponent={setActiveComponent} />
      <div className="user-content">{renderComponent()}</div>
    </div>
  );
};

export default UserDashboard;
