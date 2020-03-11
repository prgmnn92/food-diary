import React from "react";

import "./item-list.styles.scss";

import AddedItem from "../added-item/added-item.component";

const ItemList = ({ items, removeItem }) => (
  <div className="item-list">
    {items.map((item, id) => (
      <AddedItem removeItem={removeItem} key={id} id={id} item={item} />
    ))}
  </div>
);

export default ItemList;
