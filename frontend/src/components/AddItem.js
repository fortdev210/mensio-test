import React, { useState } from "react";
import axios from "axios";

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
        "http://localhost:3001/items",
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
    <div>
      <input
        type="text"
        name="text"
        placeholder="What needs to be done"
        value={item}
        onChange={onChange}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default AddItem;
