import React from 'react';
import ToDoItem from './ToDoItem';
import style from './ToDoList.module.css';

function ToDoList({toDoData}) {
    return (
        <ul className={style.list}>
            {
                toDoData.map(item => <ToDoItem key={item.id} id={item.id} text={item.text} isDone={item.isDone} />)
            }
        </ul>
    );
}

export default ToDoList;