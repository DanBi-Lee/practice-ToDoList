import React, { useContext, useRef } from 'react';
import { todolistDispatch } from '../../context/TodolistProvider';
import style from './ToDoForm.module.css'

function ToDoForm({addItemHandler}) {
    const $text = useRef();
    const toDoDispatch = useContext(todolistDispatch);
    const onSubmit = (e) => {
        e.preventDefault();
        const text = $text.current.value;
        toDoDispatch({
            type: "ADD",
            text
        });
        $text.current.value= "";
        $text.current.focus();
    }
    return (
        <form className={style.form} onSubmit={onSubmit}>
            <input placeholder="할 일을 입력 후, Enter를 누르세요." ref={$text} />
        </form>
    );
}

export default ToDoForm;