import React from "react";

import "./item-list.styles.scss";

import AddedItem from "../added-item/added-item.component";

const ItemList = ({ items }) => (
  <div>
    {items.map(item => (
      <AddedItem item={item} />
    ))}
  </div>
);

export default ItemList;
