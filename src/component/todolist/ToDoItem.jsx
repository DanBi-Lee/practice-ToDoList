import React, { useContext } from 'react';
import style from './ToDoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { todolistDispatch } from '../../context/TodolistProvider';

function ToDoItem ({id, text, isDone}) {
    const toDoDispatch = useContext(todolistDispatch);
    const onToggle = (id) => {
        toDoDispatch({
            type: "TOGGLE",
            id
        });
    }
    const onDelete = (id) => {
        toDoDispatch({
            type: "DELETE",
            id
        });
    }
  return (
      <li data-id={id} className={`${style.item} ${isDone&&style.done}`}>
          <input type="checkbox" name={`checkBox${id}`} id={`checkBox${id}`} className={`${style.checkbox} hidden`} checked={isDone} onChange={()=>onToggle(id)} />
          <label htmlFor={`checkBox${id}`} className={style.checkboxLabel} >
              { isDone&&<FontAwesomeIcon icon={faCheck} /> }
          </label>
          <span className={style.text}>
              {text}
          </span>
          <button className={style.delete} onClick={()=>onDelete(id)} >
            <FontAwesomeIcon icon={faTrash} />
          </button>
      </li>
  );
}

export default ToDoItem;