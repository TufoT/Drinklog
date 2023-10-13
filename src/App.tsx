import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mygoals from "./components/Mygoals";
import Help from "./components/Help";
import DataContextProvider from "./context/Context";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
          <DataContextProvider>
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Mygoals" element={<Mygoals />} />
            <Route path="/Help" element={<Help />} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
          </DataContextProvider>
      </div>
    </Router>
  );
}

export default App;
