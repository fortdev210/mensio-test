import React, { useState } from "react";
import axios from "axios";
import { AddItemWrapper, TodoInput, AddBtn } from "./AddItem.styles";

const AddItem = ({ setItems, items }) => {
  const [item, setItem] = useState("");

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (!item) {
      alert("Please input your todo schedule.");
      return;
    }
    axios
      .post(
        "/items",
        {
          content: item,
          completed: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setItems([...items, response.data]);
        setItem("");
      });
  };

  return (
    <AddItemWrapper>
      <TodoInput
        type="text"
        name="text"
        placeholder="What needs to be done?"
        value={item}
        onChange={onChange}
        className="input-area"
      />
      <AddBtn onClick={addItem} className="add-btn">
        Add
      </AddBtn>
    </AddItemWrapper>
  );
};

export default AddItem;
