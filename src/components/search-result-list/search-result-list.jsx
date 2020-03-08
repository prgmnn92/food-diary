import React from "react";

import Item from "../item/item.component";

import "./search-result-list.scss";

const SearchResultList = ({ items, clickEvent }) => (
  <div className="search-result-list">
    {items.map(item => {
      return (
        <Item clickEvent={clickEvent} key={item.fields.item_id} item={item} />
      );
    })}
  </div>
);

export default SearchResultList;
