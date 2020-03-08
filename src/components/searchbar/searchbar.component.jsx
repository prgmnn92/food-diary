import React, { useState } from "react";

import { InputGroupAddon, InputGroup, Input, Button } from "reactstrap";

import "./searchbar.styles.scss";

const Searchbar = ({ searchItems }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="searchbar">
      <InputGroup className="input-group">
        <Input
          placeholder="Search for food"
          onKeyPress={e =>
            e.key === "Enter" ? searchItems(searchInput) : null
          }
          onChange={val => setSearchInput(val.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button
            type="Submit"
            onClick={() => searchItems(searchInput)}
            color="primary"
          >
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Searchbar;
