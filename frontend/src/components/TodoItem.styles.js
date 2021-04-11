import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  padding-left: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px 0px;

  &:hover {
    background-color: #dedede;
  }
`;

export const TodoContent = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => (props.completed ? "#bcc7e4" : "#212e52")};
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const RemoveBtn = styled.button`
  border-radius: 10px;
  background: #f17167;
  border: none;
  color: #fff;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  display: ${(props) => (props.completed ? "none" : "block")};

  &:hover {
    background-color: #4e4e4e;
  }

  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #bcc7e4;
`;
