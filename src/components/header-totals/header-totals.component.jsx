import React from "react";

import "./header-totals.styles.scss";

const HeaderTotals = ({ total }) => (
  <div className="header-totals">
    <div>
      <h4>Food Diary</h4>
    </div>
    <div>
      <span>Proteins: </span> <span> {total.protein.toFixed(0)}</span>
    </div>
    <div>
      <span>Carbohydrates: </span>
      <span> {total.carbohydrates.toFixed(0)}</span>
    </div>
    <div>
      <span>Fats: </span> <span> {total.fats.toFixed(0)}</span>
    </div>
    <div>
      <span>Calories: </span> <span> {total.calories.toFixed(0)} </span>
    </div>
  </div>
);

export default HeaderTotals;
