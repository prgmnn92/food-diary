import React from "react";

import "./item-list.styles.scss";
import Item from "../item/item.component";

const ItemList = items => (
  <div>{items.length > 0 ? items.map(item => <Item item={item} />) : null}</div>
);

export default ItemList;
