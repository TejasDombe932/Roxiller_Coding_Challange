// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div>
//     <h1>Tejas</h1>
//    </div>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import UserDashboard from "./Component/User/UserDashboard";
import StoreOwnerDashboard from './Component/Storeowner/StoreOwnerDashboard';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* <nav className="mb-6"> */}

          {/* <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Register
          </Link> */}
           {/* <Link to="/Admin" className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Admin
          </Link>
          <Link to="/User" className="px-4 py-2 bg-green-500 text-white rounded-lg">
            User
          </Link>
           <Link to="/StoreOwner" className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Store-Owner
          </Link> */}


        {/* </nav> */}
        <Routes>
         
          <Route path="/" element={<Register />} />
           <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<AdminDashboard/>}/>
          <Route path="/User" element={<UserDashboard></UserDashboard>}/>
          <Route path="/StoreOwner" element={<StoreOwnerDashboard></StoreOwnerDashboard>}/>
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
