import React from 'react';
import style from './ToDoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"

function ToDoItem ({id, text, isDone, toggleItemHandler, deleteItemHandler}) {
    const onToggle = () => {
        toggleItemHandler(id);
    }
    const onDelete = () => {
        deleteItemHandler(id)
    }
  return (
      <li data-id={id} className={`${style.item} ${isDone&&style.done}`}>
          <input type="checkbox" name={`checkBox${id}`} id={`checkBox${id}`} className={`${style.checkbox} hidden`} checked={isDone} onChange={onToggle} />
          <label htmlFor={`checkBox${id}`} className={style.checkboxLabel} >
              { isDone&&<FontAwesomeIcon icon={faCheck} /> }
          </label>
          <span className={style.text}>
              {text}
          </span>
          <button className={style.delete} onClick={onDelete} >
            <FontAwesomeIcon icon={faTrash} />
          </button>
      </li>
  );
}

export default ToDoItem;