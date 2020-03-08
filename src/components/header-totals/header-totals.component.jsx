import React from "react";

import "./header-totals.styles.scss";

const HeaderTotals = ({ total }) => (
  <div className="header-totals">
    <div className="title">
      <h4>Food Diary</h4>
    </div>
    <div className="proteins">
      <span>Proteins: </span> <span> {total.protein.toFixed(0)}</span>
    </div>
    <div className="carbohydrates">
      <span>Carbohydrates: </span>
      <span> {total.carbohydrates.toFixed(0)}</span>
    </div>
    <div className="fats">
      <span>Fats: </span> <span> {total.fats.toFixed(0)}</span>
    </div>
    <div className="calories">
      <span>Calories: </span> <span> {total.calories.toFixed(0)} </span>
    </div>
  </div>
);

export default HeaderTotals;
