import React from "react";
import {
  TodoItemWrapper,
  Item,
  TodoContent,
  RemoveBtn,
  Divider,
} from "./TodoItem.styles";

const TodoItem = ({ item }) => {
  return (
    <TodoItemWrapper>
      <Item>
        <TodoContent className="content" completed={item.completed}>
          {item.content}
        </TodoContent>
        {!item.completed ? (
          <RemoveBtn className="remove-btn">Remove</RemoveBtn>
        ) : null}
      </Item>
      <Divider />
    </TodoItemWrapper>
  );
};

export default TodoItem;
