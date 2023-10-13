import React, { useContext, useState } from "react";
import { DataContext } from '../context/Context';
import "../style/Mygoals.css";

const Mygoals = () => {
  const {
    setWaterGoal,
    setWaterDrank,
    setCaloriesGoal,
    setCaloriesConsumed,
  } = useContext(DataContext);

  const [waterGoalInput, setWaterGoalInput] = useState("");
  const [waterDrankInput, setWaterDrankInput] = useState("");
  const [caloriesGoalInput, setCaloriesGoalInput] = useState("");
  const [caloriesConsumedInput, setCaloriesConsumedInput] = useState("");
  const [originalWaterGoal, setOriginalWaterGoal] = useState(0);
  const [originalCaloriesGoal, setOriginalCaloriesGoal] = useState(0);

  const updateWaterGoal = () => {
    const newWaterGoal = parseFloat(waterGoalInput);
    setOriginalWaterGoal(newWaterGoal);
    setWaterGoal(newWaterGoal);
  };

  const updateWaterDrank = () => {
    const newWaterDrank = parseFloat(waterDrankInput);
    setWaterDrank(newWaterDrank);
  };

  const updateCaloriesGoal = () => {
    const newCaloriesGoal = parseFloat(caloriesGoalInput);
    setOriginalCaloriesGoal(newCaloriesGoal);
    setCaloriesGoal(newCaloriesGoal);
  };

  const updateCaloriesConsumed = () => {
    const newCaloriesConsumed = parseFloat(caloriesConsumedInput);
    setCaloriesConsumed(newCaloriesConsumed);
  };

  return (
    <div className="mygoals-container">
      <h1>
        Daily <span className="water-span">Water</span> Consumption
      </h1>
      <div className="line" />
      <div className="water-consumption">
        <div className="set-goals">
          <p>I Want To Drink</p>
          <input
            className="water-input water-set-goal"
            type="number"
            placeholder="Number Of Cups"
            value={waterGoalInput}
            onChange={(e) => setWaterGoalInput(e.target.value)}
          />
          <button className="goal-btn water-goal-btn" onClick={updateWaterGoal}>Set Water Goal</button>
        </div>
        <div className="set-goals">
          <p>I Drank</p>
          <input
            className="water-input water-drank"
            type="number"
            placeholder="Number Of Cups"
            value={waterDrankInput}
            onChange={(e) => setWaterDrankInput(e.target.value)}
          />
          <button className="goal-btn water-goal-btn" onClick={updateWaterDrank}>Set Water Drank</button>
        </div>
      </div>
      <h1 className="calories-h1">
        Daily <span className="calories-span">Calories</span> Consumption
      </h1>
      <div className="line" />
      <div className="water-consumption">
        <div className="set-goals">
          <p>I Want To Eat</p>
          <input
            className="calories-input"
            type="number"
            placeholder="Number Of Calories"
            value={caloriesGoalInput}
            onChange={(e) => setCaloriesGoalInput(e.target.value)}
          />
          <button className="goal-btn calories-goal-btn" onClick={updateCaloriesGoal}>Set Calories Goal</button>
        </div>
        <div className="set-goals">
          <p>I Ate</p>
          <input
            className="calories-input"
            type="number"
            placeholder="Number Of Calories"
            value={caloriesConsumedInput}
            onChange={(e) => setCaloriesConsumedInput(e.target.value)}
          />
          <button className="goal-btn calories-goal-btn" onClick={updateCaloriesConsumed}>Set Calories Consumed</button>
        </div>
      </div>
    </div>
  );
};

export default Mygoals;
