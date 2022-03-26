import React, { useContext, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import style from './ToDoListBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { todolist, todolistHandler } from '../../context/TodolistProvider';


function ToDoListBox() {
    const [formisOpen, setFormisOpen] = useState(false);
    const formToggleHandler = () => {
        setFormisOpen(prev=>!prev);
    }
    const toDoData = useContext(todolist);
    const todolistAction = useContext(todolistHandler);
    const total = toDoData.filter(item=> item.isDone === false).length;

    return (
        <main className={style.TodoBox}>
            <h2 className={style.amount}>할 일 {total}개 남음</h2>
            <ToDoList toDoData={toDoData} toggleItemHandler={todolistAction.toggleItemHandler} deleteItemHandler={todolistAction.deleteItemHandler} />
            {
                formisOpen&&<ToDoForm addItemHandler={todolistAction.addItemHandler}/>
            }
            <button className={`${style.toggleButton} ${formisOpen&&style.isOpen}`} onClick={formToggleHandler}>
                <FontAwesomeIcon icon={faPlus} />
                <span className="hidden">
                    오픈
                </span>
            </button>
        </main>
    );
}

export default ToDoListBox;