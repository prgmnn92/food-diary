import React from "react";

import { Toast, ToastBody, ToastHeader } from "reactstrap";

import "./added-item.styles.scss";

const AddedItem = ({ item }) => (
  <div>
    <Toast className="added-item">
      <ToastHeader className="toast-header" icon="info">
        {item.itemName}
      </ToastHeader>
      <ToastBody className="toast-body">
        <div>Proteins: {item.proteins.toFixed(0)}</div>
        <div>Carbohydrates: {item.carbohydrates.toFixed(0)}</div>
        <div>Fats: {item.fats.toFixed(0)}</div>
        <div>Calories: {item.calories.toFixed(0)}</div>
      </ToastBody>
    </Toast>
  </div>
);

export default AddedItem;
