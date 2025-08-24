import React, { useState } from "react";
import "./StoreOwnerDashboard.css";
import StoreProfile from "./StoreProfile";
import ManageProducts from "./ManageProducts";
import Orders from "./Orders";
import Rating from "./Rating";

const StoreOwnerDashboard = () => {
  const [activePage, setActivePage] = useState("storeProfile");

  const renderPage = () => {
    switch (activePage) {
      case "storeProfile":
        return <StoreProfile />;
      case "manageProducts":
        return <ManageProducts />;
      case "orders":
        return <Orders />;
      case "ratings":
         return <Rating/> 
      default:
        return <StoreProfile />;
    }
  };

  return (
    <div className="store-dashboard">
      <nav className="store-taskbar">
        <button onClick={() => setActivePage("storeProfile")}>Store Profile</button>
        <button onClick={() => setActivePage("manageProducts")}>Manage Products</button>
        <button onClick={() => setActivePage("orders")}>Orders</button>
        <button onClick={() => setActivePage("ratings")}>Ratings</button>
      </nav>
      <div className="store-content">{renderPage()}</div>
    </div>
  );
};

export default StoreOwnerDashboard;
