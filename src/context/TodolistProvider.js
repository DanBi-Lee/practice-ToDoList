import React, {createContext, useState} from "react";

const initialData = [
    {
        id: 1,
        text: "아침 산책",
        isDone: true
    }, {
        id: 2,
        text: "오늘의 뉴스 읽기",
        isDone: false
    }
];
const initialHandler = {
    addItemHandler: (text) => {},
    toggleItemHandler: (id) => {},
    deleteItemHandler: (id) => {}
}
export const todolist = createContext(initialData);
export const todolistHandler = createContext(initialHandler);

function TodolistProvider({children}) {
    const [toDoData,
        setToDoData] = useState(initialData);
    const addItemHandler = (text) => {
        const newItem = {
            id: new Date().getTime(),
            text,
            isDone: false
        }
        setToDoData(prev => prev.concat(newItem))
    }
    const toggleItemHandler = (id) => {
        setToDoData(prev => prev.map(item => item.id === id
            ? {
                ...item,
                isDone: !item.isDone
            }
            : item));
    };
    const deleteItemHandler = (id) => {
        setToDoData(prev => prev.filter(item => item.id !== id));
    }

    const handler={
      addItemHandler,
      toggleItemHandler,
      deleteItemHandler
    }

    return (
        <todolist.Provider value={toDoData}>
            <todolistHandler.Provider value={handler}>
                {children}
            </todolistHandler.Provider>
        </todolist.Provider>
    );
}

export default TodolistProvider;
