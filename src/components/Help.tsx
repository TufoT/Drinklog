import React from "react";
import "../style/Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-items">
        <div className="high-calories">
          <h1>
            High <span>Calorie</span> Foods
          </h1>
          <div className="line" />
          <div className="high-cal-row1">
            <div className="item">
              <div className="cal-circle" />
              <p>Fruit Yogurt</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p className="greek-text">Greek Yogurt</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Rice</p>
            </div>
          </div>
          <div className="high-cal-row2">
            <div className="item">
              <div className="cal-circle" />
              <p className="pasta-text">Pasta</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Grilled Cheese</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Peanut Butter</p>
            </div>
          </div>
        </div>
        <div className="low-calories">
          <h1>
            Low <span>Calorie</span> Foods
          </h1>
          <div className="line" />
          <div className="low-cal-row1">
            <div className="item">
              <div className="cal-circle" />
              <p>Oats</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p className="soup-text">Soup</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Berries</p>
            </div>
          </div>
          <div className="low-cal-row2">
            <div className="item">
              <div className="cal-circle" />
              <p>Eggs</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Chia Seeds</p>
            </div>
            <div className="item">
              <div className="cal-circle" />
              <p>Fish</p>
            </div>
          </div>
        </div>
        <div className="drinks">
          <h1>Other <span>Drinks</span></h1>
          <div className="line" />
          <div className="drinks-row-one">
            <div className="item">
              <div className="drink-circle" />
              <p className="milk-text">Milk</p>
            </div>
            <div className="item">
              <div className="drink-circle" />
              <p>Soya Milk</p>
            </div>
            <div className="item">
              <div className="drink-circle" />
              <p>Kombucha</p>
            </div>
          </div>
          <div className="drinks-row-two">
          <div className="item">
              <div className="drink-circle" />
              <p>Coconut Water</p>
            </div>
            <div className="item">
              <div className="drink-circle" />
              <p className="coffee-text">Coffee</p>
            </div>
            <div className="item">
              <div className="drink-circle" />
              <p>Tea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
