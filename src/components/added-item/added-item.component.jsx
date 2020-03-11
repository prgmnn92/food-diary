import React from "react";

import { Toast, ToastBody, ToastHeader, Button } from "reactstrap";

import "./added-item.styles.scss";

const AddedItem = ({ item, id, removeItem }) => {
  let infoColor = "";

  if (item.fats > item.proteins && item.fats > item.carbohydrates) {
    infoColor = "danger";
  } else if (item.proteins > item.fats && item.proteins > item.carbohydrates) {
    infoColor = "success";
  } else {
    infoColor = "primary";
  }

  return (
    <div className="added-item">
      <Toast className="toast">
        <ToastHeader className="toast-header" icon={infoColor}>
          {item.itemName}
          <Button
            className="header-button"
            size="small"
            color="secondary"
            onClick={() => removeItem(id)}
          >
            <span style={{ position: "absolute", top: "-3px" }}>x</span>
          </Button>
        </ToastHeader>
        <ToastBody className="toast-body">
          <div className="toast-label">
            Proteins: {item.proteins.toFixed(0)}
          </div>
          <div className="toast-label">
            Carbohydrates: {item.carbohydrates.toFixed(0)}
          </div>
          <div className="toast-label">Fats: {item.fats.toFixed(0)}</div>
          <div className="toast-label">
            Calories: {item.calories.toFixed(0)}
          </div>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default AddedItem;
