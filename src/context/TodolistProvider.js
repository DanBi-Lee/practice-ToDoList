import React, { createContext, useReducer } from "react";

const initialData = [
  {
    id: 1,
    text: "아침 산책",
    isDone: true,
  },
  {
    id: 2,
    text: "오늘의 뉴스 읽기",
    isDone: false,
  },
];
const initialHandler = () => {};
export const todolist = createContext(initialData);
export const todolistDispatch = createContext(initialHandler);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const item = {
        id: new Date().getTime(),
        text: action.text,
        isDone: false,
      };
      return [...state, item];
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error("존재하지 않는 핸들러입니다");
  }
};

function TodolistProvider({ children }) {
  const [todoState, todoDispatch] = useReducer(reducer, initialData);

  return (
    <todolist.Provider value={todoState}>
      <todolistDispatch.Provider value={todoDispatch}>
        {children}
      </todolistDispatch.Provider>
    </todolist.Provider>
  );
}

export default TodolistProvider;
