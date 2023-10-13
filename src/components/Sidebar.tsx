import React from "react";
import "../style/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <h1>Drinklog</h1>
        <div className="line"></div>
        <Link className="a" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="a" to="/Mygoals">
          Mygoals
        </Link>
      </div>
      <Link className="a" to="/Help">
        Help
      </Link>
    </div>
  );
};

export default Sidebar;
