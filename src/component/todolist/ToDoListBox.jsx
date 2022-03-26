import React, { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import style from './ToDoListBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const data = [
    {id: 1, text: "아침 산책",  isDone : true},
    {id: 2, text: "오늘의 뉴스 읽기",  isDone : false}
]
function ToDoListBox() {
    const [total, setTotal] = useState(0);
    const [formisOpen, setFormisOpen] = useState(false);
    const formToggleHandler = () => {
        setFormisOpen(prev=>!prev);
    }
    const [toDoData, setToDoData] = useState(data);
    const addItemHandler = (text) => {
        const newItem = {
            id: new Date().getTime(),
            text,
            isDone: false
        }
        setToDoData(prev => prev.concat(newItem))
    }
    const toggleItemHandler = (id) => {
        setToDoData(prev=>prev.map(item => item.id===id? {...item, isDone: !item.isDone} : item ));
    };
    const deleteItemHandler = (id) => {
        setToDoData(prev => prev.filter(item => item.id !== id));
    }

    useEffect(()=>{
        setTotal(toDoData.filter(item=> item.isDone === false).length);
    }, [toDoData]);

    return (
        <main className={style.TodoBox}>
            <h2 className={style.amount}>할 일 {total}개 남음</h2>
            <ToDoList toDoData={toDoData} toggleItemHandler={toggleItemHandler} deleteItemHandler={deleteItemHandler} />
            {
                formisOpen&&<ToDoForm addItemHandler={addItemHandler}/>
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