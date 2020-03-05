import React from "react";

import {
  UncontrolledPopover,
  Button,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

const ItemCard = ({ item, clickEvent }) => (
  <div>
    <UncontrolledPopover trigger="focus" placement="bottom" target="pop">
      <PopoverHeader>{item.item_name}</PopoverHeader>
      <PopoverBody>
        <span>Proteins:{item.nf_protein}</span>
        <br />
        <span>Carbohydrates:{item.nf_total_carbohydrate}</span>
        <br />
        <span>Fats:{item.nf_total_fat}</span>
        <br />
        <span>Calories:{item.nf_calories}</span>
        <br />
        <span>Servign Size:{item.nf_serving_weight_grams}</span>
        <br />
        <Button onClick={() => clickEvent(item)} color="primary">
          Add To List
        </Button>
      </PopoverBody>
    </UncontrolledPopover>
  </div>
);

export default ItemCard;
