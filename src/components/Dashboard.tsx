import React from "react";
import "../style/Dashboard.css";
import calories from "../assets/meal.svg";
import water from "../assets/Drink Water.svg";
import { DataContext } from "../context/Context";
import { useContext } from "react";
import Chart from "./Chart";

const Dashboard = () => {
  const { waterGoal, waterDrank, caloriesGoal, caloriesConsumed } = useContext(DataContext);

  return (
    <div className="dashboard-container">
      <div className="section-1">
        <div className="water-section">
          <img src={water} className="icon" alt="icon" />
          <div className="water-graph">
            <div className="circle-one"></div>
            <div className="circle-two"></div>
            <p className="water-tracker">{waterDrank || '0'}/{waterGoal || '0'}</p>
          </div>
        </div>
        <div className="calories-section">
          <img src={calories} className="icon" alt="icon" />
          <div className="calories-graph">
            <div className="circle-three"></div>
            <div className="circle-four"></div>
            <p className="calories-tracker">{caloriesConsumed || '0'}/{caloriesGoal || '0'}</p>
          </div>
        </div>
      </div>
      <div className="graph-section">
        {/* <h3 className="graph-header">Progress</h3> */}
        <div className="chart-container"><Chart /></div>
        {/* <div className="line"></div>
        <div className="instructions">
          <div className="water">
            <div className="water-dot"></div>
            <p className="">water</p>
          </div>
          <div className="calories">
            <div className="calories-dot"></div>
            <p className="">calories</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
