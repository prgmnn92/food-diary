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
            e.key === "Enter"
              ? searchInput.length > 0
                ? searchItems(searchInput)
                : alert("Empty Input")
              : null
          }
          onChange={val => setSearchInput(val.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button
            type="Submit"
            onClick={() =>
              searchInput.length > 0
                ? searchItems(searchInput)
                : alert("Empty Input")
            }
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
