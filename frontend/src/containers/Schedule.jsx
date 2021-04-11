import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "../components/AddItem.jsx";
import TodoItem from "../components/TodoItem.jsx";
import ScheduleWrapper from "./Schedule.styles";

const Schedule = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    axios
      .get("/items/")
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
    <ScheduleWrapper>
      <h2 className="title">To Do</h2>
      <AddItem setItems={setItems} items={items} />
      <div>
        {items
          ? items.map((item, id) => {
              return <TodoItem item={item} key={id} setItems={setItems} />;
            })
          : ""}
      </div>
    </ScheduleWrapper>
  );
};

export default Schedule;
