import React from "react";
import axios from "axios";
import {
  TodoItemWrapper,
  Item,
  TodoContent,
  RemoveBtn,
  Divider,
} from "./TodoItem.styles";

const TodoItem = ({ item, setItems }) => {
  const updateTodoItem = (e) => {
    if (item.completed) return;
    if (e.target.id !== "remove") {
      axios
        .put(`http://localhost:3001/items/${item.id}`, {
          id: item.id,
        })
        .then(function (response) {
          alert("Successfully updated the task.");
          setItems(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const removeTodoItem = (e) => {
    if (e.target.id === "remove") {
      axios
        .delete(`http://localhost:3001/items/${item.id}`)
        .then(function (response) {
          alert("Successfully removed the task.");
          setItems(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <TodoItemWrapper>
      <Item onClick={(e) => updateTodoItem(e)}>
        <TodoContent className="content" completed={item.completed}>
          {item.content}
        </TodoContent>
        {!item.completed && item ? (
          <RemoveBtn
            className="remove-btn"
            onClick={(e) => removeTodoItem(e)}
            id="remove"
          >
            Remove
          </RemoveBtn>
        ) : null}
      </Item>
      <Divider />
    </TodoItemWrapper>
  );
};

export default TodoItem;
