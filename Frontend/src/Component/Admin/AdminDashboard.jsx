import { useState } from "react";
import "./AdminDashboard.css";
import UserList from "./UserList";
import StoreList from "./StoreList";
import AddUserForm from "./AddUserForm";
import AddStoreForm from "./AddStoreForm";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UserList />;
      case "stores":
        return <StoreList />;
      case "addUser":
        return <AddUserForm />;
      case "addStore":
        return <AddStoreForm />;
      default:
        return (
          <div className="dashboard-home">
            <h2>Welcome, Admin 👨‍💻</h2>
            <p>Use the sidebar to manage users and stores.</p>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul>
          <li onClick={() => setActiveTab("home")}>Dashboard Home</li>
          <li onClick={() => setActiveTab("users")}>User List</li>
          <li onClick={() => setActiveTab("stores")}>Store List</li>
          <li onClick={() => setActiveTab("addUser")}>Add User</li>
          <li onClick={() => setActiveTab("addStore")}>Add Store</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default AdminDashboard;
