import styled from "styled-components";

export const AddItemWrapper = styled.div`
  display: flex;
  height: 45px;
  justify-content: space-between;
`;

export const TodoInput = styled.input`
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: 1px solid #bcc7e4;
  width: 80%;
  font-size: 20px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #bcc7e4;
  }
`;

export const AddBtn = styled.button`
  height: 49px;
  width: 20%;
  border-radius: 0 10px 10px 0;
  background-color: #48919e;
  color: #fff;
  border: none;
  font-size: 25px;
  padding: 10px 15px 10px 15px;
  cursor: pointer;

  &:hover {
    background: #4e4e4e;
  }

  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
