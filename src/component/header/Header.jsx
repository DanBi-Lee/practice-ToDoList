import React from 'react';
import style from './Header.module.css';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const weekDay = today.getDay();
const weekDayData = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토"
];

function Header() {
    return (
        <header className={style.headerBox}>
            <h1>{`${year}년 ${month}월 ${day}일`}</h1>
            <p>{`${weekDayData[weekDay]}요일`}</p>
        </header>
    );
}

export default Header;