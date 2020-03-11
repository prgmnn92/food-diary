import React from "react";

import axios, { params } from "./axios";

import SearchResultList from "./components/search-result-list/search-result-list";
import ItemCard from "./components/item-card/item-card.component";
import ItemList from "./components/item-list/item-list.component";
import HeaderTotals from "./components/header-totals/header-totals.component";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Searchbar from "./components/searchbar/searchbar.component";

class App extends React.Component {
  state = {
    hits: [],
    item: null,
    itemList: [],
    isOpen: false
  };

  componentDidMount() {
    this.searchItems();
  }

  searchItems = async searchString => {
    if (!searchString) {
      return;
    }
    await axios
      .get("/search/" + searchString, {
        params
      })
      .then(response => {
        console.log(response);
        this.setState({ hits: [...response.data.hits] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getItem = async id => {
    await axios
      .get("/item?id=" + id, {
        params
      })
      .then(res => {
        console.log(res);
        this.setState({
          item: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addToList = (item, quantity) => {
    console.log(item);

    let itemObj = this.calculateIngredients(item, quantity);

    this.setState({
      itemList: [...this.state.itemList, itemObj]
    });
  };

  calculateIngredients = (item, quantity) => {
    let proteins = (item.nf_protein / item.nf_serving_weight_grams) * quantity;
    let carbohydrates =
      (item.nf_total_carbohydrate / item.nf_serving_weight_grams) * quantity;
    let fats = (item.nf_total_fat / item.nf_serving_weight_grams) * quantity;
    let calories = (item.nf_calories / item.nf_serving_weight_grams) * quantity;

    return {
      itemName: item.item_name,
      quantity: quantity,
      proteins: proteins,
      carbohydrates: carbohydrates,
      fats: fats,
      calories: calories
    };
  };
  removeItem = id => {
    let arr = this.state.itemList;

    arr.splice(id, 1);

    this.setState({
      itemList: [...arr]
    });
  };

  render() {
    let total = {
      protein: 0,
      fats: 0,
      carbohydrates: 0,
      calories: 0
    };

    if (this.state.itemList.length > 0) {
      total = {
        protein: this.state.itemList.reduce(
          (acc, item) => item.proteins + acc,
          0
        ),
        fats: this.state.itemList.reduce((acc, item) => item.fats + acc, 0),
        carbohydrates: this.state.itemList.reduce(
          (acc, item) => item.carbohydrates + acc,
          0
        ),
        calories: this.state.itemList.reduce(
          (acc, item) => item.calories + acc,
          0
        )
      };
    }

    return (
      <div className="App">
        <div class="header-background" />
        <div className="grid">
          <HeaderTotals total={total} />

          <Searchbar searchItems={this.searchItems} />

          <SearchResultList clickEvent={this.getItem} items={this.state.hits} />

          {this.state.item !== null ? (
            <ItemCard addToList={this.addToList} item={this.state.item} />
          ) : null}

          <ItemList removeItem={this.removeItem} items={this.state.itemList} />
        </div>
      </div>
    );
  }
}

export default App;
