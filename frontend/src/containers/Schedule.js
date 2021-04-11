import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "../components/AddItem";
import TodoItem from "../components/TodoItem";

const Schedule = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    axios
      .get("http://localhost:3001/items/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h2>To Do</h2>
      <AddItem setItems={setItems} items={items} />
      <div>
        {items
          ? items.map((item, id) => {
              return (
                <TodoItem
                  content={item.content}
                  key={id}
                  completed={item.completed}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Schedule;
