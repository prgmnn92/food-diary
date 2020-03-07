import React from "react";

import { Toast, ToastBody, ToastHeader } from "reactstrap";

import "./item.styles.scss";

const Item = ({ item, clickEvent }) => (
  <div className="item" onClick={() => clickEvent(item.fields.item_id)}>
    <Toast className="toast">
      <ToastHeader className="toast-header">
        {item.fields.item_name}
      </ToastHeader>
      <ToastBody className="toast-body">
        <span className="toast-text">brand name: {item.fields.brand_name}</span>
        <span className="toast-text">
          quantity: {item.fields.nf_serving_size_qty}
        </span>
        <span className="toast-text">
          unit: {item.fields.nf_serving_size_unit}
        </span>
      </ToastBody>
    </Toast>
  </div>
);

export default Item;
