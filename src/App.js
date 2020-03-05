import React from "react";

import axios, { params } from "./axios";
import { InputGroupAddon, InputGroup, Input, Button } from "reactstrap";

import ItemList from "./components/item-list/item-list.component";
import ItemCard from "./components/item-card/item-card.component";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends React.Component {
  state = {
    hits: [
      {
        fields: {
          item_id: "513fceb675b8dbbc210026a5",
          item_name: "White Bread - 1 slice, large",
          brand_name: "USDA",
          nf_serving_size_qty: 1,
          nf_serving_size_unit: "serving"
        }
      }
    ],
    searchInput: "",
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

  addToList = item => {
    console.log(item);
    this.setState({
      itemList: [...this.state.itemList, item]
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <div className="App scrollable">
        <h1>Food Diary</h1>

        <div className="grid ">
          <div className="grid-column ">
            <InputGroup className="input-group">
              <Input
                placeholder="Search for food"
                onChange={val =>
                  this.setState({ searchInput: val.target.value })
                }
              />
              <InputGroupAddon addonType="append">
                <Button
                  onClick={() => this.searchItems(this.state.searchInput)}
                  color="primary"
                >
                  To the Right!
                </Button>
              </InputGroupAddon>
            </InputGroup>

            <ItemList clickEvent={this.getItem} items={this.state.hits} />
          </div>
          <div className="grid-column">
            {this.state.item !== null ? (
              <ItemCard clickEvent={this.addToList} item={this.state.item} />
            ) : null}

            {this.state.itemList.length > 0
              ? this.state.itemList.map(item => {
                  return <h4>{item.item_name}</h4>;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
