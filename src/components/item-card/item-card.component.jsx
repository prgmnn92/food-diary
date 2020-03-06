import React, { useState } from "react";

import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

const ItemCard = ({ item, addToList }) => {
  const [quantity, setQuantity] = useState(0);

  let faktor = 100 / item.nf_serving_weight_grams;
  let protein = item.nf_protein * faktor;
  let carbohydrates = item.nf_total_carbohydrate * faktor;
  let fats = item.nf_total_fat * faktor;
  let calories = item.nf_calories * faktor;

  return (
    <div>
      <Card trigger="focus" placement="bottom" target="pop">
        <CardTitle>{item.item_name}</CardTitle>
        <CardBody>
          <span>Proteins:{protein.toFixed(0)}</span>
          <br />
          <span>Carbohydrates:{carbohydrates.toFixed(0)}</span>
          <br />
          <span>Fats:{fats.toFixed(0)}</span>
          <br />
          <span>Calories:{calories.toFixed(0)}</span>
          <br />
          <span>Servign Size:{item.nf_serving_weight_grams * faktor}</span>
          <br />

          <InputGroup>
            <Input
              onChange={val => setQuantity(val.target.value)}
              placeholder="Add in gram"
            />
            <InputGroupAddon addonType="append">
              <Button
                onClick={() => addToList(item, Number(quantity))}
                color="primary"
              >
                Add To List
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};
export default ItemCard;
