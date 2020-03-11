import React, { useState } from "react";

import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

import "./item-card.styles.scss";

const ItemCard = ({ item, addToList }) => {
  const [quantity, setQuantity] = useState(0);

  let faktor = 100 / item.nf_serving_weight_grams;
  let protein = item.nf_protein * faktor;
  let carbohydrates = item.nf_total_carbohydrate * faktor;
  let fats = item.nf_total_fat * faktor;
  let calories = item.nf_calories * faktor;

  return (
    <div className="item-card">
      <Card shadow trigger="focus" placement="bottom" target="pop">
        <CardHeader tag="h4">{item.item_name}</CardHeader>
        <CardBody>
          <span className="card-row">
            <div className="tags">Proteins:</div>
            <div className="quantity">{protein.toFixed(0)} g</div>
          </span>
          <br />
          <span className="card-row">
            <div className="tags">Carbohydrates:</div>
            <div className="quantity">{carbohydrates.toFixed(0)} g</div>
          </span>
          <br />
          <span className="card-row">
            <div className="tags">Fats:</div>
            <div className="quantity">{fats.toFixed(0)} g</div>
          </span>
          <br />
          <span className="card-row">
            <div className="tags">Calories:</div>
            <div className="quantity">{calories.toFixed(0)} g</div>
          </span>
          <br />
          <span className="card-row">
            <div className="tags">Servign Size:</div>
            <div className="quantity">
              {item.nf_serving_weight_grams * faktor} g
            </div>
          </span>
          <br />

          <InputGroup>
            <Input
              onChange={val => setQuantity(val.target.value)}
              onKeyPress={e =>
                e.key === "Enter"
                  ? quantity.length > 0
                    ? addToList(item, Number(quantity))
                    : alert("Empty Input")
                  : null
              }
              placeholder="Add in gram"
            />
            <InputGroupAddon addonType="append">
              <Button
                onClick={() =>
                  quantity.length > 0
                    ? addToList(item, Number(quantity))
                    : alert("Empty Input")
                }
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
